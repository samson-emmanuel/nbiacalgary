import { Link } from 'react-router-dom'
import { Icon } from './Icons'
import { Eyebrow } from './Motifs'

export function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  children,
  ...rest
}) {
  const cls = `btn btn-${variant}`
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export function SectionHeading({ eyebrow, title, lede, align = 'left' }) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}

export function IconTile({ icon }) {
  return (
    <span className="icon-tile">
      <Icon name={icon} />
    </span>
  )
}

export function ValueCard({ name, desc, icon }) {
  return (
    <article className="value-card">
      <IconTile icon={icon} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </article>
  )
}

/* Stand-in for real photography — none was supplied with the site content.
   Keeps the identity's dawn/grain language instead of a generic broken
   image or stock-photo placeholder; swap for real photos when available. */
export function PhotoPlaceholder({ label, ratio = '4 / 3', tone = 'dawn' }) {
  return (
    <div className={`photo-placeholder tone-${tone}`} style={{ aspectRatio: ratio }}>
      <svg viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 300a300 260 0 0 1 600 0" opacity="0.5" />
        <path d="M-40 340h680" opacity="0.5" />
      </svg>
      {label && <span className="photo-placeholder-label">{label}</span>}
    </div>
  )
}
