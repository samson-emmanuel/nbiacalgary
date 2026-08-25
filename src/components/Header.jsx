import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Wordmark } from './Motifs'
import { Button } from './UI'
import { navLinks } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-inner">
        <NavLink to="/" className="brand" aria-label="New Beginning International Assembly Calgary — Home">
          <Wordmark />
        </NavLink>

        <nav
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label="Primary"
          onClick={() => setOpen(false)}
        >
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="main-nav-cta">
            <Button to="/giving" variant="ghost">
              Give
            </Button>
            <Button to="/visit" variant="primary">
              Plan Your Visit
            </Button>
          </div>
        </nav>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
