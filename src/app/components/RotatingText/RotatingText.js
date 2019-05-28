import React, { useEffect, useState } from 'react'

import './RotatingText.scss'

const RotatingText = () => {

  const words = document.getElementsByClassName('word-rotating')
  const wordArray = []
  const [currentWord, setCurrentWord] = useState(0)

  const handleWord = () => {
    words[currentWord].style.opacity = 1
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i])
    }

    changeWord()
    setInterval(changeWord, 4000)
  }

  const changeWord = () => {
    let cw = wordArray[currentWord]
    let nw = currentWord === words.length-1 ? wordArray[0] : wordArray[currentWord+1]
    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i)
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind'
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i)
    }

    let _currentWord = (currentWord === wordArray.length-1) ? 0 : currentWord+1;
    setCurrentWord(_currentWord)
  }

  const animateLetterOut = (cw, i) => {
    setTimeout(() => {
      cw[i].className = 'letter out'
    }, i*80)
  }

  const animateLetterIn = (nw, i) => {
    setTimeout(() => {
      nw[i].className = 'letter in'
    }, 340+(i*80))
  }

  const splitLetters = (word) => {
    let content = word.innerHTML
    word.innerHTML = ''
    let letters = []
    for (let i = 0; i < content.length; i++) {
      let letter = document.createElement('span')
      letter.className = 'letter'
      letter.innerHTML = content.charAt(i)
      word.appendChild(letter)
      letters.push(letter)
    }
    wordArray.push(letters)
  }

  useEffect(() => {
    window.addEventListener('load', handleWord, false)
  })

  return (
    <div class="rotating-text">
      <p>Nachos are</p>
      <p>
        <span class="word-rotating wisteria">tasty.</span>
        <span class="word-rotating belize">wonderful.</span>
        <span class="word-rotating pomegranate">fancy.</span>
        <span class="word-rotating green">beautiful.</span>
        <span class="word-rotating midnight">cheap.</span>
      </p>
    </div>
  )
}

export default RotatingText
