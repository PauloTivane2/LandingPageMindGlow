import { motion } from "motion/react"
import { securityItemsList } from "../../data/security"
import { SectionTitle } from "../common/SectionTitle"
import { reveal, stagger } from "../common/animations"

export function Security() {
  return (
    <section
      id="seguranca"
      className="relative overflow-hidden bg-gradient-to-b from-transparent via-primary-light/20 to-transparent py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
        <SectionTitle
          eyebrow="Confiança em cada detalhe"
          title="Segurança, privacidade e integridade"
          copy="Saúde é assunto sério. Por isso, proteção de dados e transparência fazem parte do MindGlow desde a primeira linha de código."
          align="left"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {securityItemsList.map(({ icon: Icon, title, copy }) => (
            <motion.article
              key={title}
              variants={reveal}
              className="rounded-2xl border border-primary/15 bg-white/85 p-5 shadow-lg shadow-primary/5 backdrop-blur dark:border-white/10 dark:bg-surface-dark/85"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-primary-light dark:bg-white/10">
                <Icon className="size-6 text-primary-dark dark:text-primary" />
              </div>
              <motion.h3 className="mt-5 text-lg font-semibold text-text-primary-light sm:text-xl dark:text-white">
                {title}
              </motion.h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
                {copy}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
