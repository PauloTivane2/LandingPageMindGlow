import { useReducedMotion, motion } from "motion/react"

interface BackgroundGridProps {
  gridSize?: number
  className?: string
  showOrbs?: boolean
}

export function BackgroundGrid({
  gridSize = 48,
  className = "",
  showOrbs = true,
}: BackgroundGridProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* 1. Orbes de Gradiente Animados e Suaves em Múltiplas Alturas */}
      {showOrbs && (
        <>
          {/* Orbe Ciano/Primário (Canto superior esquerdo) */}
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    x: [0, 40, -30, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.12, 0.95, 1],
                  }
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 -top-20 size-[32rem] rounded-full bg-gradient-to-br from-primary/18 via-primary/8 to-transparent blur-[110px] dark:from-primary/20 dark:via-primary/5"
          />

          {/* Orbe Magenta/Secundário (Zona intermediária / direita) */}
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    x: [0, -50, 30, 0],
                    y: [0, 40, -25, 0],
                    scale: [1, 1.08, 0.92, 1],
                  }
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -right-24 top-1/3 size-[34rem] rounded-full bg-gradient-to-bl from-secondary/14 via-secondary/6 to-transparent blur-[120px] dark:from-secondary/18 dark:via-secondary/5"
          />

          {/* Orbe Inferior Ciano / Roxo (Zona baixa / Ecossistema & Download) */}
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    x: [0, 35, -20, 0],
                    y: [0, -25, 15, 0],
                    scale: [0.95, 1.05, 1, 0.95],
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute -bottom-10 left-1/4 size-[32rem] rounded-full bg-gradient-to-tr from-primary/15 via-secondary/10 to-transparent blur-[110px] dark:from-primary/18 dark:via-secondary/8"
          />
        </>
      )}

      {/* 2. Grid Vetorial SVG Contínuo e Nítido em Toda a Tela */}
      <svg
        className="absolute inset-0 h-full w-full stroke-neutral-900/[0.055] dark:stroke-white/[0.07]"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Padrão da Grade Primária com linhas e marcadores de interseção */}
          <pattern
            id="mindglow-grid-pattern"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              strokeWidth="1"
            />
            {/* Marcadores circulares sutis nos cruzamentos */}
            <circle
              cx={gridSize}
              cy={gridSize}
              r="1.2"
              className="fill-primary/45 dark:fill-primary/55"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#mindglow-grid-pattern)" />
      </svg>

      {/* 3. Feixes de Luz Sutis que Correm Pelas Linhas da Grade */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 5,
            }}
            className="absolute top-[192px] h-[1px] w-96 bg-gradient-to-r from-transparent via-primary/70 to-transparent"
          />
          <motion.div
            animate={{
              x: ["200%", "-100%"],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 6,
              delay: 3,
            }}
            className="absolute top-[528px] h-[1px] w-80 bg-gradient-to-r from-transparent via-secondary/60 to-transparent"
          />
        </div>
      )}
    </div>
  )
}
