import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/* Thin gold line under the header that fills as the visitor scrolls down
   the current page — resets on every route change. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0)
    }
    const raf = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
