import { Link } from 'react-router-dom'
import { Wordmark } from './Motifs'
import { Icon, IconAt, IconPhone, IconPin, IconClock } from './Icons'
import { church, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="footer-brand">
          <Wordmark />
          <p>{church.altLine}</p>
          <p className="footer-tagline">{church.tagline}</p>
        </div>

        <div className="footer-col">
          <h4>Visit</h4>
          <ul className="footer-info">
            <li>
              <IconClock /> {church.serviceDay}, {church.serviceTime}
            </li>
            <li>
              <IconPin /> {church.venue}, {church.city}
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="footer-links">
            {navLinks.slice(1).map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul className="footer-info">
            <li>
              <IconPhone /> <a href={`tel:${church.phoneHref}`}>{church.phone}</a>
            </li>
            <li>
              <IconAt /> <a href={`mailto:${church.email}`}>{church.email}</a>
            </li>
          </ul>
          <div className="footer-social" aria-label="Social media">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span className="footer-mark"><Icon name="cross" width={16} height={16} /></span>
        <p>
          © {new Date().getFullYear()} New Beginning International Assembly Calgary. All rights reserved.
        </p>
        <p className="footer-verse">“His mercies are new every morning.” — Lamentations 3:23</p>
      </div>
    </footer>
  )
}
