/* Decorative marks that carry the site's visual identity: a "new beginning"
   dawn breaking over the horizon. Used sparingly as texture, not decoration
   for its own sake. */

export function DawnMark({ className = '' }) {
  return (
    <svg
      className={`dawn-mark ${className}`}
      viewBox="0 0 600 420"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.9">
        <path d="M90 300a210 210 0 0 1 420 0" />
        <path d="M40 300h520" />
        <path d="M300 60v46M180 90l28 38M420 90l-28 38M110 170l40 24M490 170l-40 24" />
      </g>
      <circle cx="300" cy="300" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Wordmark({ withName = true }) {
  return (
    <span className="wordmark">
      <svg
        className="wordmark-glyph"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 25a12 12 0 0 1 24 0"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 25h32" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="25" r="1.6" fill="currentColor" />
      </svg>
      {withName && (
        <span className="wordmark-text">
          <strong>New Beginning</strong>
          <em>International Assembly Calgary</em>
        </span>
      )}
    </span>
  )
}

export function SectionRule({ label }) {
  if (!label) {
    return (
      <div className="section-rule" role="presentation">
        <span className="section-rule-line" />
      </div>
    )
  }
  return (
    <div className="section-rule" role="presentation">
      <span className="section-rule-line" />
      <span className="section-rule-label">{label}</span>
      <span className="section-rule-line" />
    </div>
  )
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}
