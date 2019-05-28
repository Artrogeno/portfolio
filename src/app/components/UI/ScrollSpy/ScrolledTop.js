import React, { Fragment, Children } from 'react'
import classNames from 'classnames'

const ScrolledTop = (props) => {
  let { children, tag, animete = { behavior: 'smooth', block: 'start' } } = props
  let count = 0

  const goScrollTop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById(tag).scrollIntoView(animete)
  }

  const componentChild = Children.map(children, child => {
    if (!child) return null
    const ScrollTopComponent = child.type
    const childClass = classNames({
        'pointer': true,
        [`${ child.props.className }`]: child.props.className || ''
    })
    return (
      <ScrollTopComponent {...child.props} className={childClass} key={count++}
        onClick={(event) => goScrollTop(event)}>
        { child.props.children }
      </ScrollTopComponent>
    )
  })

  return (
    <Fragment>
      {componentChild}
    </Fragment>
  )
}

export default ScrolledTop
