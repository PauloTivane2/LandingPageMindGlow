import { Check, Download, Sparkles } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import meditationImage from "../../assets/images/meditation.webp"
import logo from "../../assets/logos/mindglow-simple.png"
import { CLIENT_APP_URL } from "../../constants/links"
import { ButtonLink } from "../common/ButtonLink"
import { reveal, stagger } from "../common/animations"

export function Hero() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 50])

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-transparent via-primary-light/20 to-transparent pt-24 sm:pt-32"
    >
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 px-4 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Conteúdo Textual / CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 pt-2 sm:pt-6"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary-dark shadow-sm backdrop-blur dark:bg-white/10 dark:text-primary"
          >
            <Sparkles className="size-3.5" />
            <span>Cuidado que acompanha a tua rotina</span>
          </motion.div>

          <motion.h1
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-text-primary-light dark:text-white sm:text-5xl lg:text-headline-hero"
          >
            Cuida da tua mente,{" "}
            <span className="text-primary-dark dark:text-primary">
              todos os dias.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark sm:text-lg sm:leading-8"
          >
            Autocuidado diário, especialistas qualificados e um plano feito para
            ti. Psicologia, nutrição e preparação física num único lugar.
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href={CLIENT_APP_URL} download="mindglow.apk" className="w-full sm:w-auto">
              <Download className="size-5" />
              Baixar o app
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark"
          >
            {["Profissionais verificados", "Acompanhamento seguro"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-medium">{item}</span>
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Imagem Hero Responsiva, sem bordas nem preenchimentos pesados */}
        <motion.div
          style={reducedMotion ? undefined : { y: heroY }}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-xs flex-col items-center justify-center sm:max-w-sm lg:max-w-md"
        >
          <motion.img
            animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={meditationImage}
            alt="Mulher em momento de meditação e autocuidado"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="block h-auto max-h-[290px] w-auto max-w-full object-contain sm:max-h-[380px] lg:max-h-[460px]"
          />

          {/* Badge flutuante sutil e responsiva */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="mt-2 flex items-center gap-2.5 rounded-xl bg-white/90 px-3 py-2 shadow-md backdrop-blur sm:absolute sm:-bottom-4 sm:left-0 sm:mt-0 dark:bg-surface-dark/90"
          >
            <img src={logo} alt="" className="size-9 shrink-0 object-contain sm:size-12" />
            <div>
              <span className="block text-xs font-bold text-text-primary-light sm:text-sm dark:text-white">
                O teu espaço seguro
              </span>
              <span className="text-[10px] text-text-secondary-light sm:text-xs dark:text-text-secondary-dark">
                Cuidado integrado
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
