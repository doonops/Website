import React from 'react'
import HomePage from './Home.jsx'

export default function SectionRoute({ target }) {
  React.useEffect(() => {
    const scroll = () => {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // allow content to mount before scrolling
    const t = setTimeout(scroll, 50)
    return () => clearTimeout(t)
  }, [target])

  return <HomePage />
}

