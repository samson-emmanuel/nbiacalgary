const common = {
  width: 28,
  height: 28,
  viewBox: '0 0 28 28',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/* A small family of hand-drawn, single-weight line marks — no icon-font,
   no clipart. Each ties back to the dawn / new-beginning visual language.
   pathLength="1" normalizes every path/circle to a 0–1 length so the
   .icon-tile draw-in animation in index.css can dash/undash them uniformly
   regardless of each shape's actual geometry. */

export function IconBook(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M14 8.5c-2-1.6-4.8-2.3-9-2.3v14.6c4.2 0 7 .7 9 2.3" />
      <path pathLength="1" d="M14 8.5c2-1.6 4.8-2.3 9-2.3v14.6c-4.2 0-7 .7-9 2.3" />
      <path pathLength="1" d="M14 8.5v14.6" />
    </svg>
  )
}

export function IconFlame(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M14 4c1 3-2.4 4.4-2.4 7.6a2.4 2.4 0 0 0 4.8 0c0-1-.5-1.7-.9-2.4" />
      <path pathLength="1" d="M14 8.6c2.8 2.2 5 5 5 8.2a5 5 0 0 1-10 0c0-1.9.8-3.3 1.7-4.6" />
    </svg>
  )
}

export function IconDove(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M4 15c3-.2 5-1.6 6.3-3.6.4 2 1.8 3 3.7 3-1 1.4-2.7 2-4.5 1.8" />
      <path pathLength="1" d="M10 13.4C11 9 15 6 21 6c-1.6 2-1.4 3.6-.4 4.8-3.6.2-6 1.8-7.2 4.6-1 2.3-3 4-6.4 4.2" />
      <circle pathLength="1" cx="18.4" cy="8.4" r=".6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSunrise(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M9 15a5 5 0 0 1 10 0" />
      <path pathLength="1" d="M4 15h20" />
      <path pathLength="1" d="M14 6v2.4M6.5 15 8 13.6M21.5 15 20 13.6M4 19.4h20" />
    </svg>
  )
}

export function IconAnchor(props) {
  return (
    <svg {...common} {...props}>
      <circle pathLength="1" cx="14" cy="6.4" r="1.9" />
      <path pathLength="1" d="M14 8.3V21M9 12h10M6 14.5c0 3.8 3 6.7 8 6.7s8-2.9 8-6.7" />
    </svg>
  )
}

export function IconPath(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M6 22c0-3 3-3 3-6s-3-3-3-6 3-3 3-6" />
      <circle pathLength="1" cx="19" cy="6.5" r="1.7" />
      <path d="M19 9v13" strokeDasharray="1 3.2" />
    </svg>
  )
}

export function IconHands(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M4 14c2.6-2 4.7-2.4 6.7-1.3C13 14 14 16 14 18.6" />
      <path pathLength="1" d="M24 14c-2.6-2-4.7-2.4-6.7-1.3C15 14 14 16 14 18.6" />
      <path pathLength="1" d="M14 18.6c0 2-1.6 3.4-4 3.4M14 18.6c0 2 1.6 3.4 4 3.4" />
    </svg>
  )
}

export function IconFamily(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M5 21v-6.4L10 10l5 4.6V21" />
      <path pathLength="1" d="M3 15.6 10 9l7 6.6" />
      <circle pathLength="1" cx="20.5" cy="10.5" r="2.3" />
      <path pathLength="1" d="M17 21v-3.4c0-1.6 1.5-2.9 3.5-2.9s3.5 1.3 3.5 2.9V21" />
    </svg>
  )
}

export function IconCompass(props) {
  return (
    <svg {...common} {...props}>
      <circle pathLength="1" cx="14" cy="14" r="9.4" />
      <path pathLength="1" d="M17.4 10.6 15.6 15.6 10.6 17.4l1.8-5z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconSeal(props) {
  return (
    <svg {...common} {...props}>
      <circle pathLength="1" cx="14" cy="11" r="6.4" />
      <path pathLength="1" d="M11 11.2l2 2 4-4.2" />
      <path pathLength="1" d="M10.4 16.6 8.4 24l5.6-2.8 5.6 2.8-2-7.4" />
    </svg>
  )
}

export function IconWheat(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M14 24V6" />
      <path pathLength="1" d="M14 8c-2-1.5-2-3.4-1-5.6M14 8c2-1.5 2-3.4 1-5.6" />
      <path pathLength="1" d="M14 12.4c-2.2-1.2-3-3-2.4-5.2M14 12.4c2.2-1.2 3-3 2.4-5.2" />
      <path pathLength="1" d="M14 16.8c-2.2-1.2-3-3-2.4-5.2M14 16.8c2.2-1.2 3-3 2.4-5.2" />
      <path pathLength="1" d="M11 24h6" />
    </svg>
  )
}

export function IconCross(props) {
  return (
    <svg {...common} {...props}>
      <path pathLength="1" d="M14 4v20M7 11h14" />
    </svg>
  )
}

export function IconAt(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="14" cy="14.5" r="4.2" />
      <path d="M18.2 14.5V17c0 1.3 1 2.1 2 2.1 1.8 0 3.3-2 3.3-4.9C23.5 8.7 19.4 5 14.3 5 8.9 5 4.7 9.2 4.7 14.4S8.9 24 14.3 24c2 0 3.6-.4 5.2-1.3" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...common} {...props}>
      <path d="M6.5 5.5c1-.7 2.2-1 3-.4l2 1.6c.8.6.9 1.8.2 2.7l-1 1.3c-.5.7-.4 1.7.3 2.7 1.2 1.8 2.9 3.5 4.7 4.7 1 .7 2 .8 2.7.3l1.3-1c.9-.7 2.1-.6 2.7.2l1.6 2c.6.8.3 2-.4 3-1 1.3-2.5 2-4 1.7-3.4-.7-6.9-3-9.7-5.8s-5.1-6.3-5.8-9.7c-.3-1.5.4-3 1.4-4z" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg {...common} {...props}>
      <path d="M14 24s7.5-7.3 7.5-13A7.5 7.5 0 0 0 6.5 11c0 5.7 7.5 13 7.5 13z" />
      <circle cx="14" cy="11" r="2.6" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="14" cy="14" r="9.4" />
      <path d="M14 8.6V14l4 2.6" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg {...common} {...props}>
      <path d="M5 14h17M15 7l7 7-7 7" />
    </svg>
  )
}

export function IconPlay(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="14" cy="14" r="9.6" />
      <path d="M12 10.3 18 14l-6 3.7z" strokeLinejoin="round" />
    </svg>
  )
}

const registry = {
  book: IconBook,
  flame: IconFlame,
  dove: IconDove,
  sunrise: IconSunrise,
  anchor: IconAnchor,
  path: IconPath,
  hands: IconHands,
  family: IconFamily,
  compass: IconCompass,
  seal: IconSeal,
  wheat: IconWheat,
  cross: IconCross,
}

export function Icon({ name, ...props }) {
  const Cmp = registry[name] || IconSunrise
  return <Cmp {...props} />
}
