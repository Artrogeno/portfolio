import { useState, useEffect } from 'react'

const ShowOnScrolled = (offset) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop
    setShow(top > offset)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return show
};

export default ShowOnScrolled
