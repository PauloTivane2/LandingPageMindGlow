import { Video } from "lucide-react"
import { motion } from "motion/react"
import consultationImage from "../../assets/images/consultation.png"
import { howItWorksSteps } from "../../data/steps"
import type { StepItem } from "../../types"
import { Carousel } from "../common/Carousel"
import { SectionTitle } from "../common/SectionTitle"
import { reveal, stagger } from "../common/animations"

function StepCard({
  item,
  index,
  isActive = true,
}: {
  item: StepItem
  index: number
  isActive?: boolean
}) {
  const { icon: Icon, title, copy } = item

  return (
    <article
      className={`h-full rounded-2xl border p-5 transition-all duration-300 sm:p-6 lg:border-0 lg:p-0 lg:text-center ${
        isActive
          ? "border-primary/40 bg-white/90 shadow-md dark:border-primary/30 dark:bg-surface-dark"
          : "border-border-light/60 bg-white/40 dark:border-white/10 dark:bg-surface-dark/40"
      }`}
    >
      <div className="flex items-start gap-4 lg:block">
        <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border-4 border-white bg-primary text-background-dark shadow-lg shadow-primary/20 sm:size-14 lg:mx-auto dark:border-background-dark">
          <Icon className="size-5" />
        </div>
        <div className="lg:mt-6">
          <span className="font-display text-2xl font-bold text-primary-dark sm:text-3xl dark:text-primary">
            0{index + 1}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-text-primary-light sm:text-xl dark:text-white">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
            {copy}
          </p>
        </div>
      </div>
    </article>
  )
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="overflow-hidden bg-transparent py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle
          eyebrow="Como funciona"
          title="O teu cuidado, passo a passo"
          copy="Começa ao teu ritmo. O MindGlow transforma cada pequena ação num plano de evolução contínua."
        />

        {/* Versão Mobile & Tablet: Passos em Carrossel Horizontal Sequencial */}
        <div className="mt-8 lg:hidden">
          <Carousel
            items={howItWorksSteps}
            cardClassName="w-[82vw] sm:w-[320px] shrink-0 snap-center"
            renderItem={(item, index, isActive) => (
              <StepCard item={item} index={index} isActive={isActive} />
            )}
          />
        </div>

        {/* Versão Desktop: Linha Conectora com 4 Passos */}
        <div className="relative mt-16 hidden lg:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-[12.5%] right-[12.5%] top-7 h-px origin-left bg-gradient-to-r from-primary via-secondary to-primary"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 lg:grid-cols-4"
          >
            {howItWorksSteps.map((item, index) => (
              <motion.div key={item.title} variants={reveal}>
                <StepCard item={item} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Banner Imersivo de Consulta Conectada: Imagem completa e nítida + gradiente refinado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-border-light/60 bg-[#24130d] shadow-2xl sm:mt-20 dark:border-white/10"
        >
          {/* Imagem Completa e Nítida (Sem cortes nem desfoques no rosto e mãos) */}
          <div className="absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[58%]">
            <img
              src={consultationImage}
              alt="Especialista pronta para uma teleconsulta"
              className="h-full w-full object-contain object-bottom sm:object-right-bottom"
            />
          </div>

          {/* Gradiente Profissional Direcional (Cobre apenas a área de leitura, deixando a especialista 100% nítida) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#24130d] via-[#24130d]/80 via-45% to-transparent sm:bg-gradient-to-r sm:from-[#24130d] sm:from-40% sm:via-[#24130d]/75 sm:via-60% sm:to-transparent" />

          {/* Glow Suave da Marca */}
          <div className="pointer-events-none absolute -bottom-10 -left-10 size-60 rounded-full bg-primary/15 blur-3xl" />

          {/* Conteúdo Sobreposto Limpo, com Contraste Perfeito */}
          <div className="relative z-10 flex min-h-[460px] flex-col justify-end p-6 sm:min-h-[480px] sm:max-w-lg sm:justify-center sm:p-10 lg:min-h-[520px] lg:max-w-xl lg:p-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
              <Video className="size-3.5 text-primary" />
              Consulta conectada
            </span>

            <motion.h3
              variants={reveal}
              className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Profissionais que te veem por inteiro
            </motion.h3>

            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base sm:leading-7">
              Psicologia, nutrição clínica e preparação física conectadas numa visão
              integrada da tua evolução. Consultas em vídeo HD com acolhimento humano,
              sigilo total e sempre com o teu consentimento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
