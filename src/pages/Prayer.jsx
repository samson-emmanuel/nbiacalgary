import { SectionRule } from '../components/Motifs'
import { SectionHeading } from '../components/UI'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { Icon, IconPhone, IconAt } from '../components/Icons'
import { church, testimonyCategories } from '../data/content'
import { bannerImages } from '../data/images'

export default function Prayer() {
  return (
    <>
      <PageHeader
        eyebrow="Prayer & Testimonies"
        title="How can we pray for you?"
        lede="We believe in the power of prayer and would be honoured to pray with you. Whatever situation you may be facing, you do not have to face it alone."
        image={bannerImages.prayer}
      />

      <section className="section">
        <div className="container">
          <Reveal className="empty-state">
            <span className="icon-tile">
              <Icon name="flame" />
            </span>
            <h3>Reach out to us directly</h3>
            <p>
              Online prayer request submissions aren't available just yet. Call or email
              us directly and our ministry team will pray with you.
            </p>
            <div className="empty-state-contact">
              <a className="empty-state-contact-item" href={`tel:${church.phoneHref}`}>
                <IconPhone /> {church.phone}
              </a>
              <a className="empty-state-contact-item" href={`mailto:${church.email}`}>
                <IconAt /> {church.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionRule label="Testimonies" />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What God Has Done"
            title="Testimonies remind us of His faithfulness"
            lede="We believe testimonies encourage faith. Written and video testimonies from our church family will be featured here soon."
          />
          <ul className="tag-list tag-list-center">
            {testimonyCategories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="empty-state">
            <span className="icon-tile">
              <Icon name="seal" />
            </span>
            <h3>Your story matters</h3>
            <p>
              Online testimony submissions aren't available just yet. Call or email us
              directly to share what God has done — every testimony is reviewed, and
              nothing is posted publicly without your consent.
            </p>
            <div className="empty-state-contact">
              <a className="empty-state-contact-item" href={`tel:${church.phoneHref}`}>
                <IconPhone /> {church.phone}
              </a>
              <a className="empty-state-contact-item" href={`mailto:${church.email}`}>
                <IconAt /> {church.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
