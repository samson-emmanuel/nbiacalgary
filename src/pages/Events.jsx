import { Icon } from '../components/Icons'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { eventCategories, church } from '../data/content'
import { bannerImages } from '../data/images'

export default function Events() {
  return (
    <>
      <PageHeader
        eyebrow="What's Coming Up"
        title="Upcoming Events"
        lede={`Conferences, anniversary programs, outreach and special services — this is where we'll post what's coming up at ${church.shortName}.`}
        image={bannerImages.events}
      />

      <section className="section">
        <div className="container">
          <Reveal className="empty-state">
            <span className="icon-tile">
              <Icon name="compass" />
            </span>
            <h3>No events posted yet</h3>
            <p>
              We're preparing our events calendar. Check back soon, or follow us on
              Facebook and YouTube for the latest announcements — every event will
              include its date, time, venue and a way to register or join online.
            </p>
          </Reveal>

          <Reveal className="event-categories" delay={100}>
            <h4>Event categories we'll be posting</h4>
            <ul className="tag-list">
              {eventCategories.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
