import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently active based on scroll position.
 * Compares scrollY (plus an offset for the sticky navbar) against each
 * section's offsetTop.
 */
export function useScrollSpy(ids: string[], offset = 120): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + offset

      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [ids, offset])

  return active
}
