import React from 'react'

export default function Slider({
  items,
  renderItem,
  ariaLabel = 'carousel',
  direction = 'horizontal', // 'horizontal' | 'vertical'
  itemWidth = 320,
  itemHeight = 360,
  viewport = 0, // for vertical: visible height in px; 0 => auto
  autoplay = false,
  interval = 3000,
}) {
  const trackRef = React.useRef(null)
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(true)
  const hoverRef = React.useRef(false)
  const isHorizontal = direction !== 'vertical'

  const updateButtons = React.useCallback(() => {
    const el = trackRef.current
    if (!el) return
    if (isHorizontal) {
      const { scrollLeft, scrollWidth, clientWidth } = el
      setCanPrev(scrollLeft > 0)
      setCanNext(scrollLeft + clientWidth < scrollWidth - 1)
    } else {
      const { scrollTop, scrollHeight, clientHeight } = el
      setCanPrev(scrollTop > 0)
      setCanNext(scrollTop + clientHeight < scrollHeight - 1)
    }
  }, [isHorizontal])

  React.useEffect(() => {
    updateButtons()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateButtons, { passive: true })
    const ro = new ResizeObserver(updateButtons)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateButtons)
      ro.disconnect()
    }
  }, [updateButtons])

  React.useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => {
      if (hoverRef.current) return
      const el = trackRef.current
      if (!el) return
      if (isHorizontal) {
        const { scrollLeft, scrollWidth, clientWidth } = el
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          const amount = Math.max(itemWidth, Math.floor(clientWidth * 0.85))
          el.scrollBy({ left: amount, behavior: 'smooth' })
        }
      } else {
        const { scrollTop, scrollHeight, clientHeight } = el
        if (scrollTop + clientHeight >= scrollHeight - 2) {
          el.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const amount = Math.max(itemHeight, Math.floor(clientHeight * 0.85))
          el.scrollBy({ top: amount, behavior: 'smooth' })
        }
      }
    }, Math.max(1500, interval))
    return () => clearInterval(id)
  }, [autoplay, interval, itemWidth, itemHeight, isHorizontal])

  const scrollByAmount = (dir) => {
    const el = trackRef.current
    if (!el) return
    if (isHorizontal) {
      const amount = Math.max(itemWidth, Math.floor(el.clientWidth * 0.85)) * dir
      el.scrollBy({ left: amount, behavior: 'smooth' })
    } else {
      const amount = Math.max(itemHeight, Math.floor(el.clientHeight * 0.85)) * dir
      el.scrollBy({ top: amount, behavior: 'smooth' })
    }
  }

  return (
    <div className={`slider ${isHorizontal ? 'horizontal' : 'vertical'}`} aria-label={ariaLabel}>
      <button
        className={`slider-btn ${isHorizontal ? 'slider-btn-prev' : 'slider-btn-up'}`}
        onClick={() => scrollByAmount(-1)}
        disabled={!canPrev}
        aria-label="Previous"
      >
        {isHorizontal ? '‹' : '▲'}
      </button>
      <div
        className={`slider-track ${isHorizontal ? 'horizontal' : 'vertical'}`}
        ref={trackRef}
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        style={!isHorizontal && viewport ? { height: viewport } : undefined}
      >
        {items.map((item, idx) => (
          <div
            className="slider-item"
            key={idx}
            style={isHorizontal ? { width: itemWidth } : { height: itemHeight, width: '100%' }}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>
      <button
        className={`slider-btn ${isHorizontal ? 'slider-btn-next' : 'slider-btn-down'}`}
        onClick={() => scrollByAmount(1)}
        disabled={!canNext}
        aria-label="Next"
      >
        {isHorizontal ? '›' : '▼'}
      </button>
    </div>
  )
}
