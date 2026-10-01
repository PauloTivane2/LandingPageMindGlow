import { Download } from "lucide-react"
import { motion } from "motion/react"
import { CLIENT_APP_URL } from "../../constants/links"
import { ButtonLink } from "../common/ButtonLink"

export function CTA() {
  return (
    <section
      id="download"
      className="bg-transparent px-4 pb-16 sm:px-8 sm:pb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark to-secondary px-5 py-12 text-center shadow-2xl shadow-primary/20 sm:px-12 sm:py-20"
      >
        <div className="pointer-events-none absolute -left-12 -top-12 size-48 rounded-full border border-white/20" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full border border-white/15" />

        <motion.h2 className="relative font-display text-3xl font-semibold tracking-tight text-white sm:text-headline-section">
          Escolhe o teu espaço no MindGlow.
        </motion.h2>

        <p className="relative mt-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
          Links de download externos
        </p>

        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          Acompanha a tua jornada, regista como te sentes e mantém o cuidado
          presente entre cada consulta.
        </p>

        <div className="relative mt-8 flex justify-center">
          <ButtonLink
            href={CLIENT_APP_URL}
            variant="white"
            download="mindglow.apk"
            className="w-full max-w-xl flex-col items-center gap-2 rounded-2xl border-2 border-white px-6 py-4 text-center shadow-2xl shadow-background-dark/20 sm:px-8 sm:py-5"
          >
            <span className="flex items-center gap-2 text-base font-bold sm:text-lg">
              <Download className="size-5 sm:size-6" />
              Baixar o app
            </span>
            <span className="text-xs font-normal text-text-secondary-light sm:text-sm">
              Para acompanhares sentimentos, hábitos e evolução.
            </span>
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  )
}
