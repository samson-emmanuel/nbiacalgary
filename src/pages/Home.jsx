import { Link } from 'react-router-dom'
import { Button, SectionHeading, ValueCard, PhotoPlaceholder } from '../components/UI'
import { DawnMark, Eyebrow } from '../components/Motifs'
import { Icon, IconClock, IconPin, IconArrowRight, IconPlay } from '../components/Icons'
import {
  church,
  aboutParagraphs,
  coreValues,
  weeklyPrograms,
  pastor,
  watchCategories,
} from '../data/content'

const featuredValues = coreValues.filter((v) =>
  ['The Word of God', 'Prayer', 'Worship', 'Discipleship', 'Family', 'Purpose'].includes(v.name),
)

export default function Home() {
  return (
    <>
      <section className="page-hero">
        <DawnMark className="hero-dawn" />
        <div className="container hero-inner">
          <Eyebrow>{church.altLine}</Eyebrow>
          <h1 className="hero-title">
            Every sunrise is proof
            <br />
            <em>God isn’t finished with you yet.</em>
          </h1>
          <p className="hero-sub">
            {church.name} is a Christ-centred, Bible-believing church in Calgary — a
            community where people encounter Jesus, grow in the Word and prayer, and
            step into the purpose He has for their lives.
          </p>
          <div className="hero-actions">
            <Button to="/visit" variant="primary">
              Plan Your Visit <IconArrowRight width={18} height={18} />
            </Button>
            <Button to="/watch" variant="outline">
              <IconPlay width={18} height={18} /> Watch & Grow
            </Button>
          </div>

          <div className="hero-info-strip">
            <span className="hero-info-item">
              <IconClock /> {church.serviceDay} · {church.serviceTime}
            </span>
            <span className="hero-info-item">
              <IconPin /> {church.venue}, {church.city}
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading eyebrow="Who We Are" title="A place for a new beginning" />
            <p className="body-text">{aboutParagraphs[0]}</p>
            <p className="body-text">{aboutParagraphs[2]}</p>
            <Button to="/about" variant="text">
              More about our church <IconArrowRight width={16} height={16} />
            </Button>
          </div>
          <PhotoPlaceholder label="Sunday gathering, Beddington Theatre Arts Centre" />
        </div>
      </section>

      <section className="section section-ink">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What We Hold To"
            title="Core values that shape everything we do"
          />
          <div className="grid-values">
            {featuredValues.map((v) => (
              <ValueCard key={v.name} {...v} />
            ))}
          </div>
          <div className="align-center" style={{ marginTop: '2.5rem' }}>
            <Button to="/beliefs" variant="ghost-invert">
              Read our full statement of faith <IconArrowRight width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Throughout the Week"
            title="Gather with us — in person and online"
            lede="Prayer and the Word don't stop on Sunday. Join a rhythm of gatherings throughout the week."
          />
          <div className="program-grid">
            {weeklyPrograms.map((p) => (
              <article className="program-card" key={p.name}>
                <span className="icon-tile">
                  <Icon name={p.icon} />
                </span>
                <span className="program-mode">{p.mode}</span>
                <h3>{p.name}</h3>
                <p className="program-when">{p.when}</p>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
          <div className="align-center" style={{ marginTop: '2.5rem' }}>
            <Button to="/ministries" variant="outline">
              View all ministries <IconArrowRight width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split split-reverse">
          <PhotoPlaceholder label={pastor.name} ratio="1 / 1" tone="wine" />
          <div>
            <SectionHeading eyebrow="Meet Our Lead Pastor" title={pastor.name} />
            <p className="body-text">{pastor.bio[0]}</p>
            <p className="body-text">{pastor.bio[1]}</p>
            <Button to="/about#pastor" variant="text">
              Read more about Pastor James <IconArrowRight width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Watch & Grow"
            title="Stay rooted in the Word, wherever you are"
            lede="Messages, teaching series and prayer broadcasts from NBIAC — available whenever you need them."
          />
          <div className="watch-grid watch-grid-preview">
            {watchCategories.slice(0, 4).map((c) => (
              <Link to="/watch" className="watch-card" key={c.name}>
                <span className="watch-card-play">
                  <IconPlay width={22} height={22} />
                </span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </Link>
            ))}
          </div>
          <div className="align-center" style={{ marginTop: '2.5rem' }}>
            <Button to="/watch" variant="outline">
              Explore Watch & Grow <IconArrowRight width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container band-grid">
          <div className="band-card">
            <Icon name="flame" />
            <h3>Need Prayer?</h3>
            <p>You don't have to face it alone. Share a request and our team will stand with you.</p>
            <Button to="/prayer" variant="outline">
              Submit a Prayer Request <IconArrowRight width={16} height={16} />
            </Button>
          </div>
          <span className="band-divider" aria-hidden="true" />
          <div className="band-card">
            <Icon name="seal" />
            <h3>Giving Is Worship</h3>
            <p>Your generosity fuels the Gospel here in Calgary and to the nations.</p>
            <Button to="/giving" variant="outline">
              Learn About Giving <IconArrowRight width={16} height={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container align-center">
          <Eyebrow>You Are Welcome. You Are Valued.</Eyebrow>
          <h2>There is room for you here.</h2>
          <p className="lede">
            Whatever season of life you're in, come and experience heartfelt worship,
            fervent prayer and life-transforming teaching from God's Word.
          </p>
          <Button to="/visit" variant="primary">
            Plan Your First Visit <IconArrowRight width={18} height={18} />
          </Button>
        </div>
      </section>
    </>
  )
}
