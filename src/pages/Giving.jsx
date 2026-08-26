import { Button } from '../components/UI'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { Icon, IconArrowRight } from '../components/Icons'
import { church } from '../data/content'
import { bannerImages } from '../data/images'

export default function Giving() {
  return (
    <>
      <PageHeader
        eyebrow="Giving"
        title="Giving is an act of worship"
        lede="We believe giving is an expression of worship, gratitude and partnership in the work God has entrusted to this ministry. Every gift supports the work of the church, our ministry programs, outreach and the advancement of the Gospel."
        image={bannerImages.giving}
      />

      <section className="section">
        <div className="container">
          <Reveal className="empty-state">
            <span className="icon-tile">
              <Icon name="seal" />
            </span>
            <h3>Giving options are being finalized</h3>
            <p>
              Only our church's officially approved giving methods will be listed here —
              simple, secure and transparent. Until this section is live, please contact
              us and a member of our team will be glad to help you give.
            </p>
            <Button to="/contact" variant="primary">
              Contact Us About Giving <IconArrowRight width={16} height={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container align-center">
          <Reveal>
            <p className="lede">
              “Each of you should give what you have decided in your heart to give, not
              reluctantly or under compulsion, for God loves a cheerful giver.”
            </p>
            <p className="role-line">2 Corinthians 9:7</p>
            <p className="role-line" style={{ marginTop: '1rem' }}>
              {church.shortName} · {church.city}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
