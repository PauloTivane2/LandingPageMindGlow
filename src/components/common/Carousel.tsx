import { useEffect, useRef, useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "motion/react"

export interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number, isActive: boolean) => ReactNode
  className?: string
  cardClassName?: string
  showControls?: boolean
  showDots?: boolean
}

export function Carousel<T>({
  items,
  renderItem,
  className = "",
  cardClassName = "w-[85vw] sm:w-[360px] shrink-0 snap-center",
  showControls = true,
  showDots = true,
}: CarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = containerRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)

    // Identificar qual item está mais próximo do centro
    const children = Array.from(el.children) as HTMLElement[]
    if (children.length === 0) return

    const containerCenter = scrollLeft + clientWidth / 2
    let closestIndex = 0
    let minDistance = Infinity

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const distance = Math.abs(containerCenter - childCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)

    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [items.length])

  const scrollToIndex = (index: number) => {
    const el = containerRef.current
    if (!el) return

    const children = Array.from(el.children) as HTMLElement[]
    if (children[index]) {
      const child = children[index]
      const scrollPos = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2
      el.scrollTo({ left: scrollPos, behavior: "smooth" })
    }
  }

  const scrollBy = (direction: "left" | "right") => {
    const target = direction === "left" ? activeIndex - 1 : activeIndex + 1
    if (target >= 0 && target < items.length) {
      scrollToIndex(target)
    }
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Controles de Navegação (Desktop & Tablet) */}
      {showControls && (
        <div className="mb-4 flex items-center justify-end gap-2 px-1">
          <motion.button
            type="button"
            onClick={() => scrollBy("left")}
            disabled={!canScrollLeft}
            aria-label="Item anterior"
            whileHover={{ scale: canScrollLeft ? 1.08 : 1 }}
            whileTap={{ scale: canScrollLeft ? 0.94 : 1 }}
            className={`grid size-10 place-items-center rounded-full border transition-all ${
              canScrollLeft
                ? "border-border-light bg-white text-text-primary-light shadow-sm hover:border-primary hover:text-primary-dark dark:border-white/10 dark:bg-surface-dark dark:text-white"
                : "cursor-not-allowed border-border-light/40 bg-surface-light/40 text-text-secondary-light/40 dark:border-white/5 dark:bg-surface-dark/40 dark:text-white/20"
            }`}
          >
            <ChevronLeft className="size-5" />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollBy("right")}
            disabled={!canScrollRight}
            aria-label="Próximo item"
            whileHover={{ scale: canScrollRight ? 1.08 : 1 }}
            whileTap={{ scale: canScrollRight ? 0.94 : 1 }}
            className={`grid size-10 place-items-center rounded-full border transition-all ${
              canScrollRight
                ? "border-border-light bg-white text-text-primary-light shadow-sm hover:border-primary hover:text-primary-dark dark:border-white/10 dark:bg-surface-dark dark:text-white"
                : "cursor-not-allowed border-border-light/40 bg-surface-light/40 text-text-secondary-light/40 dark:border-white/5 dark:bg-surface-dark/40 dark:text-white/20"
            }`}
          >
            <ChevronRight className="size-5" />
          </motion.button>
        </div>
      )}

      {/* Sequência Horizontal de Cards (Scroll Snap + Touch Swipe) */}
      <div
        ref={containerRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-3"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item, index) => (
          <div key={index} className={cardClassName}>
            {renderItem(item, index, index === activeIndex)}
          </div>
        ))}
      </div>

      {/* Indicadores de Paginação (Dots) */}
      {showDots && items.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Ir para card ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-primary"
                  : "w-2 bg-border-light hover:bg-primary/40 dark:bg-white/20 dark:hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
