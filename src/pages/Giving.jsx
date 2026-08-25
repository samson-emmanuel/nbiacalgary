import { Eyebrow } from '../components/Motifs'
import { Button } from '../components/UI'
import { Icon, IconArrowRight } from '../components/Icons'
import { church } from '../data/content'

export default function Giving() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>Giving</Eyebrow>
          <h1>Giving is an act of worship</h1>
          <p className="lede">
            We believe giving is an expression of worship, gratitude and partnership in
            the work God has entrusted to this ministry. Every gift supports the work of
            the church, our ministry programs, outreach and the advancement of the
            Gospel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="empty-state">
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
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container align-center">
          <p className="lede">
            “Each of you should give what you have decided in your heart to give, not
            reluctantly or under compulsion, for God loves a cheerful giver.”
          </p>
          <p className="role-line">2 Corinthians 9:7</p>
          <p className="role-line" style={{ marginTop: '1rem' }}>
            {church.shortName} · {church.city}
          </p>
        </div>
      </section>
    </>
  )
}
