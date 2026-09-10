import { useEffect, useRef } from 'react'

/**
 * A page-wide glow that follows the cursor. Sits at z-0 behind content, so it
 * only shows through sections that don't set an opaque background.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    function handleMove(e: PointerEvent) {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty('--spot-x', `${e.clientX}px`)
        ref.current?.style.setProperty('--spot-y', `${e.clientY}px`)
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />
}
