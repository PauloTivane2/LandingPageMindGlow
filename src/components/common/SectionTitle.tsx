import { motion } from "motion/react"
import type { SectionTitleProps } from "../../types"
import { reveal } from "./animations"

export function SectionTitle({
  eyebrow,
  title,
  copy,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`}
    >
      <p
        className={`mb-3 text-xs font-semibold uppercase tracking-widest ${
          light ? "text-primary" : "text-primary-dark"
        }`}
      >
        {eyebrow}
      </p>
      <motion.h2
        className={`font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-headline-section ${
          light ? "text-white" : "text-text-primary-light dark:text-white"
        }`}
      >
        {title}
      </motion.h2>
      {copy && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base sm:leading-7 ${
            light
              ? "text-white/70"
              : "text-text-secondary-light dark:text-text-secondary-dark"
          }`}
        >
          {copy}
        </p>
      )}
    </motion.div>
  )
}
