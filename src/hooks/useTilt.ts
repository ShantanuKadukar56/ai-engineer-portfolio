import { useRef } from 'react'

/**
 * Attaches a subtle 3D tilt effect to a card on pointer move, by setting
 * --rx / --ry CSS custom properties consumed by the .tilt-hover class.
 */
export function useTilt<T extends HTMLElement>(maxDeg = 6) {
  const ref = useRef<T | null>(null)

  function onMouseMove(e: React.MouseEvent<T>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const ry = (px - 0.5) * maxDeg * 2
    const rx = -(py - 0.5) * maxDeg * 2
    el.style.setProperty('--rx', `${rx}deg`)
    el.style.setProperty('--ry', `${ry}deg`)
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return { ref, onMouseMove, onMouseLeave }
}
