import { Eyebrow } from '../components/Motifs'
import { Icon } from '../components/Icons'
import { eventCategories, church } from '../data/content'

export default function Events() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>What's Coming Up</Eyebrow>
          <h1>Upcoming Events</h1>
          <p className="lede">
            Conferences, anniversary programs, outreach and special services — this is
            where we'll post what's coming up at {church.shortName}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="icon-tile">
              <Icon name="compass" />
            </span>
            <h3>No events posted yet</h3>
            <p>
              We're preparing our events calendar. Check back soon, or follow us on
              Facebook and YouTube for the latest announcements — every event will
              include its date, time, venue and a way to register or join online.
            </p>
          </div>

          <div className="event-categories">
            <h4>Event categories we'll be posting</h4>
            <ul className="tag-list">
              {eventCategories.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
