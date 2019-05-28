import React, { Children, useState, useEffect } from 'react'
import classNames from 'classnames'

const ScrollAnimate = (props) => {
  const {
    children,
    rootElement,
    level = 1,
    offset = 0,
    tag = 'ul',
    className= '',
    navClass = 'nav-link',
    activeClass = 'active',
    selectorClass = 'section',
    animete = { behavior: 'smooth', block: 'start' },
    navbarId = '',
    navbarClass = '',
    navbarOffset = 0
  } = props
  const TagComponent = tag
  let count = 0

  const [sections, setSections] = useState({})

  const _getScrollDimension = () => {
    const scrollTop = (document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop)
    const scrollHeight = (document.documentElement.scrollHeight || document.body.parentNode.scrollHeight || document.body.scrollHeight)
    return { scrollTop, scrollHeight }
  }

  const _changeNavBar = (top) => {
    if (navbarId !== '') {
      const navbar = document.getElementById(navbarId);
      if (top <= navbarOffset) {
        navbar.classList.add(navbarClass);
      } else {
        navbar.classList.remove(navbarClass);
      }
    }
  }

  const hendleSpy = () => {
    const { scrollTop, scrollHeight } = _getScrollDimension()
    const windowHeight = window.innerHeight
    const scrollBottom = scrollTop + windowHeight

    sections.forEach(item => {
      const rect = item.getBoundingClientRect()
      const elementBottom = scrollBottom - rect.height
      const elementOffset = scrollHeight - rect.height

      if ( (rect.y <= offset && rect.y >= -(rect.height) ) || elementBottom >= elementOffset ) {
        let eletemtActive = document.querySelector(`.${activeClass}`)
        let setActive = document.querySelector(`a[href*=${item.id}]`)

        if (eletemtActive) {
          eletemtActive.setAttribute('class', navClass)
        }
        if (setActive) {
          setActive.setAttribute('class', `${navClass} ${activeClass}`)
        }
      }
    })

    _changeNavBar(scrollTop)
  }

  const initState = () => {
    let sections = {}, section = document.querySelectorAll(`.${selectorClass}`)
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
    setSections(section)
  }

  const goScrollTag = (event, _tag) => {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById(_tag).scrollIntoView(animete)
  }

  const onEvent = () => {
    const el = rootElement ? document.querySelector(rootElement) : window
    el.addEventListener('scroll', hendleSpy)
  }

  const offEvent = () => {
    const el = rootElement ? document.querySelector(rootElement) : window
    el.removeEventListener('scroll', hendleSpy)
  }

  const levelChildren = (child) => {
    let resultChildren = []
    for (let i = 0; i < level; i++) {
      resultChildren = child.children.props
    }
    if (!resultChildren.href) return
    return resultChildren.href.split('#')[1]
  }

  const navs = Children.map(children, (child, id) => {
    if (!child) return null
    const ChildTagComponent = child.type
    const elementID = levelChildren(child.props)
    const childClass = classNames({
      [`${ child.props.className }`]: child.props.className || ''
    })

    return (
      <ChildTagComponent {...child.props} className={childClass} key={count++}
        onClick={(event) => goScrollTag(event, elementID)}>
        { child.props.children }
      </ChildTagComponent>
    )
  })

  useEffect(() => {
    initState()
    onEvent()
    return function cleanup() {
      offEvent()
    };
  });

  return (
    <TagComponent className={ className }>
      { navs }
    </TagComponent>
  )
}

export default ScrollAnimate
