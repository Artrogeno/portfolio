import React, { useEffect } from 'react'

const Text = () => {

  const canvasText = () => {
    const _canvas = document.getElementById('textCanvas')
    let _context = _canvas.getContext('2d')
    let mask, pointCount = 500, str = 'Hello.'
    let fontStr = 'bold 128pt Helvetica Neue, Helvetica, Arial, sans-serif'

    _context.font = fontStr
    _context.textAlign = 'center'
    _canvas.width = _context.measureText(str).width
    _canvas.height = 128 // Set to font size

    let whitePixels = []
    let points = []
    function point(x,y,vx,vy) {
      this.x = x
      this.y = y
      this.vx = vx || 1
      this.vy = vy || 1
    }

    point.prototype.update = () => {
      _context.beginPath()
      _context.fillStyle = '#95a5a6'
      _context.arc(this.x,this.y,1,0,2*Math.PI)
      _context.fill()
      _context.closePath()

      // Change direction if running into black pixel
      if (this.x+this.vx >= _canvas.width || this.x+this.vx < 0 || mask.data[coordsToI(this.x+this.vx, this.y, mask.width)] !== 255) {
        this.vx *= -1
        this.x += this.vx*2
      }
      if (this.y+this.vy >= _canvas.height || this.y+this.vy < 0 || mask.data[coordsToI(this.x, this.y+this.vy, mask.width)] !== 255) {
        this.vy *= -1
        this.y += this.vy*2
      }

      for (let k = 0, m = points.length; k<m; k++) {
        if (points[k]===this) continue

        let d = Math.sqrt(Math.pow(this.x-points[k].x,2)+Math.pow(this.y-points[k].y,2))
        if (d < 5) {
          _context.lineWidth = .2
          _context.beginPath()
          _context.moveTo(this.x,this.y)
          _context.lineTo(points[k].x,points[k].y)
          _context.stroke()
        }
        if (d < 20) {
          _context.lineWidth = .1
          _context.beginPath()
          _context.moveTo(this.x,this.y)
          _context.lineTo(points[k].x,points[k].y)
          _context.stroke()
        }
      }

      this.x += this.vx
      this.y += this.vy
    }

    const loop = () => {
      _context.clearRect(0,0,_canvas.width,_canvas.height)
      for (let k = 0, m = points.length; k < m; k++) {
        points[k].update()
      }
    }

    const init = () => {
      // Draw text
      _context.beginPath()
      _context.fillStyle = '#000'
      _context.rect(0,0,_canvas.width,_canvas.height)
      _context.fill()
      _context.font = fontStr
      _context.textAlign = 'left'
      _context.fillStyle = '#fff'
      _context.fillText(str,0,_canvas.height/2+(_canvas.height / 2))
      _context.closePath()

      // Save mask
      mask = _context.getImageData(0,0,_canvas.width,_canvas.height)

      // Draw background
      _context.clearRect(0,0,_canvas.width,_canvas.height)

      // Save all white pixels in an array
      for (let i = 0; i < mask.data.length; i += 4) {
        if (mask.data[i] === 255 && mask.data[i+1] === 255 && mask.data[i+2] === 255 && mask.data[i+3] === 255) {
          whitePixels.push([iToX(i,mask.width),iToY(i,mask.width)])
        }
      }

      for (let k = 0; k < pointCount; k++) {
        addPoint()
      }
    }

    const addPoint = () => {
      let spawn = whitePixels[Math.floor(Math.random()*whitePixels.length)]

      let p = new point(spawn[0],spawn[1], Math.floor(Math.random()*2-1), Math.floor(Math.random()*2-1))
      points.push(p)
    }
    const iToX = (i,w) => {
      return ((i%(4*w))/4)
    }
    const iToY = (i,w) => {
      return (Math.floor(i/(4*w)))
    }
    const coordsToI = (x,y,w) => {
      return ((mask.width*y)+x)*4
    }

    setInterval(loop,50)
    init()
  }

  const handleLoad = () => {
    canvasText()
  }

  useEffect(() => {
    window.addEventListener('load', handleLoad, false)
  })

  return (
    <canvas id='textCanvas'></canvas>
  )
}

export default Text
