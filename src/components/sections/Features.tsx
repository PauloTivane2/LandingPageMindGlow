import { motion } from "motion/react"
import { featuresList } from "../../data/features"
import type { FeatureItem } from "../../types"
import { Carousel } from "../common/Carousel"
import { SectionTitle } from "../common/SectionTitle"
import { reveal, stagger } from "../common/animations"

function FeatureCard({
  item,
  isActive = true,
}: {
  item: FeatureItem
  isActive?: boolean
}) {
  const { icon: Icon, title, description, color } = item

  return (
    <article
      className={`group h-full rounded-2xl border bg-surface-light p-6 shadow-sm transition-all duration-300 sm:p-7 dark:bg-background-dark ${
        isActive
          ? "border-primary/40 shadow-lg shadow-primary/5 dark:border-primary/30"
          : "border-border-light dark:border-white/10"
      } hover:shadow-xl hover:shadow-primary/5`}
    >
      <div className={`grid size-12 place-items-center rounded-xl ${color}`}>
        <Icon className="size-6" strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-text-primary-light sm:text-xl dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-text-secondary-light sm:text-base sm:leading-7 dark:text-text-secondary-dark">
        {description}
      </p>
    </article>
  )
}

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="bg-gradient-to-b from-transparent via-primary-light/20 to-transparent py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle
          eyebrow="Uma jornada integrada"
          title="Cuidado que entende o todo"
          copy="Ferramentas simples e especialistas próximos para apoiar a tua mente, o teu corpo e a tua rotina."
        />

        {/* Versão Mobile & Tablet: Sequência Horizontal com Carrossel */}
        <div className="mt-10 lg:hidden">
          <Carousel
            items={featuresList}
            cardClassName="w-[82vw] sm:w-[340px] shrink-0 snap-center"
            renderItem={(item, _, isActive) => (
              <FeatureCard item={item} isActive={isActive} />
            )}
          />
        </div>

        {/* Versão Desktop: Grid Completo */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3"
        >
          {featuresList.map((item) => (
            <motion.div
              key={item.title}
              variants={reveal}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <FeatureCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
