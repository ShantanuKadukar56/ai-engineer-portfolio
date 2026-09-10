import { useEffect, useRef } from 'react'

/**
 * A trailing ring cursor that eases toward the pointer and expands over
 * interactive elements. Purely decorative: the native cursor stays visible.
 */
export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    function handleMove(e: PointerEvent) {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    function handleOver(e: PointerEvent) {
      const target = (e.target as HTMLElement)?.closest?.('a, button, input, textarea, .tilt-hover')
      ringRef.current?.classList.toggle('cursor-ring--active', !!target)
    }

    let frame: number
    function loop() {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18
      ring.current.y += (pos.current.y - ring.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerover', handleOver)
    frame = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerover', handleOver)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
}
