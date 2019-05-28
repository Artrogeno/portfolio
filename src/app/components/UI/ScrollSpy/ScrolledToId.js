import React, { Fragment, Children } from 'react'
import { Button } from 'reactstrap'

const ScrolledToId = (props) => {
  let { children, animete = { behavior: 'smooth', block: 'start' } } = props
  let count = 0

  const goScrollTop = (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById(id).scrollIntoView(animete)
  }

  const componentReactstrapButtom = (child, id) => {
    return (
      <Button {...child} key={count++} onClick={(event) => goScrollTop(event, id)}>
        {child.children}
      </Button>
    )
  }

  const componentChild = Children.map(children, child => {
    if (!child) return null
    if (child.props) {
      if (child.props.findid) {
        const id = child.props.findid
        if (child.props.reactstrap) {
          let componentType = child.props.reactstrap
          if (componentType === 'Button') {
            return componentReactstrapButtom( child.props, id)
          }
        } else {
          const ScrollIdComponent = child.type
          let classname = child.props.className || ''
          return (
            <ScrollIdComponent className={classname} key={count++}
              onClick={(event) => goScrollTop(event, id)}>
              {child.props.children}
            </ScrollIdComponent>
          )
        }
      } else {
        return child
      }
    }
  })

  return (
    <Fragment>
      {componentChild}
    </Fragment>
  )
}

export default ScrolledToId
