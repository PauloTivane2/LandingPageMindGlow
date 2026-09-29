import { Dumbbell, MessageCircle, RefreshCw, Zap } from "lucide-react"
import { motion } from "motion/react"
import progressImage from "../../assets/images/progress.png"
import type { LucideIconType } from "../../types"
import { SectionTitle } from "../common/SectionTitle"
import { reveal } from "../common/animations"

export function Ecosystem() {
  const highlightItems: Array<{ icon: LucideIconType; label: string }> = [
    { icon: RefreshCw, label: "Sincronização com MindGlow Specialist" },
    { icon: Dumbbell, label: "Planos que evoluem contigo" },
    { icon: MessageCircle, label: "Comunicação contínua e sem intermediários" },
    { icon: Zap, label: "Ajustes de rotina em tempo real" },
  ]

  return (
    <section className="bg-transparent py-14 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-2 lg:gap-12">
        {/* Imagem de Progresso - Responsiva e Limpa */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <img
            src={progressImage}
            alt="Pessoa a acompanhar o teu progresso pelo telemóvel"
            className="block h-auto max-h-[250px] w-auto max-w-full object-contain sm:max-h-[340px] lg:max-h-[440px]"
          />
        </motion.div>

        {/* Informações do Ecossistema Conectado */}
        <div>
          <SectionTitle
            eyebrow="Ecossistema conectado"
            title="Tu evoluis. O teu especialista acompanha."
            align="left"
          />
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-sm leading-relaxed text-text-secondary-light sm:mt-5 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 dark:text-text-secondary-dark"
          >
            O MindGlow opera de forma integrada com o aplicativo MindGlow Specialist.
            Toda a atualização de consulta, prescrição de plano alimentar ou liberação de
            tarefas terapêuticas reflete imediatamente no teu telemóvel em tempo real.
          </motion.p>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 grid gap-3 sm:grid-cols-2"
          >
            {highlightItems.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border-light bg-white/80 p-3 text-xs font-semibold text-text-primary-light shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5 sm:p-3.5 sm:text-sm dark:border-white/10 dark:bg-background-dark/80 dark:text-white"
              >
                <Icon className="size-4 shrink-0 text-secondary sm:size-5" />
                <span>{label}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
