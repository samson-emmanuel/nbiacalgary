import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { Icon, IconAt, IconPhone, IconPin, IconClock } from '../components/Icons'
import { church } from '../data/content'
import { bannerImages } from '../data/images'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We would love to hear from you"
        lede="Whether you are planning your first visit, searching for a church family, requesting prayer or simply looking for more information, we would love to connect with you."
        image={bannerImages.contact}
        imagePosition="25% 60%"
      />

      <section className="section">
        <div className="container">
          <Reveal className="contact-card">
            <ul className="contact-detail-list">
              <li>
                <Icon name="anchor" />
                <div>
                  <h4>{church.name}</h4>
                  <p>{church.city}</p>
                </div>
              </li>
              <li>
                <IconClock />
                <div>
                  <h4>Sunday Worship</h4>
                  <p>{church.serviceDay}, {church.serviceTime}</p>
                </div>
              </li>
              <li>
                <IconPin />
                <div>
                  <h4>Venue</h4>
                  <p>{church.venue}, {church.city}</p>
                </div>
              </li>
              <li>
                <IconPhone />
                <div>
                  <h4>Phone</h4>
                  <p><a href={`tel:${church.phoneHref}`}>{church.phone}</a></p>
                </div>
              </li>
              <li>
                <IconAt />
                <div>
                  <h4>Email</h4>
                  <p><a href={`mailto:${church.email}`}>{church.email}</a></p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="map-frame">
            <iframe
              className="map-embed"
              title={`Map to ${church.venue}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${church.venue}, ${church.city}`)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
