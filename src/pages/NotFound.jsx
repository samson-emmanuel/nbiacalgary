import { Eyebrow } from '../components/Motifs'
import { Button } from '../components/UI'
import { IconArrowRight } from '../components/Icons'

export default function NotFound() {
  return (
    <section className="section align-center" style={{ paddingTop: '9rem', paddingBottom: '9rem' }}>
      <div className="container align-center">
        <Eyebrow>404</Eyebrow>
        <h1>This page has wandered off.</h1>
        <p className="lede">Let's get you back to solid ground.</p>
        <Button to="/" variant="primary">
          Return Home <IconArrowRight width={18} height={18} />
        </Button>
      </div>
    </section>
  )
}
