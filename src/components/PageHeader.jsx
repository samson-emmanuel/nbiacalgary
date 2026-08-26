import Reveal from './Reveal'
import { Eyebrow } from './Motifs'

export default function PageHeader({ eyebrow, title, lede, image, imagePosition = 'center' }) {
  return (
    <section
      className={`page-header${image ? ' has-image' : ''}`}
      style={image ? { '--banner-image': `url(${image})`, '--banner-position': imagePosition } : undefined}
    >
      <div className="container">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </Reveal>
      </div>
    </section>
  )
}
