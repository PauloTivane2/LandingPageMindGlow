import type { ComponentType, ReactNode } from "react"
import {
  Apple,
  ArrowRight,
  AtSign,
  Bell,
  BookOpen,
  Check,
  ClipboardList,
  Dumbbell,
  EyeOff,
  HeartHandshake,
  HeartPulse,
  Globe2,
  LockKeyhole,
  Mail,
  MessageCircle,
  Play,
  ShieldCheck,
  Smile,
  Sparkles,
  UserRound,
  Video,
} from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

import consultationImage from "./imports/consulta-1.png"
import progressImage from "./imports/four-1.png"
import logo from "./imports/mindGlow_Logo-1.png"
import meditationImage from "./imports/one-1.png"

type Icon = ComponentType<{ className?: string strokeWidth?: number }>

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function Logo({
  className,
  label = true,
  light = false,
}: {
  className: string
  label?: boolean
  light?: boolean
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={logo}
        alt="MindGlow"
        className={`${className} shrink-0 object-contain`}
      />
      {label && (
        <span
          className={`text-lg font-bold tracking-tight ${
            light ? "text-white" : "text-text-primary-light dark:text-white"
          }`}
        >
          Mind<span className="text-primary">Glow</span>
        </span>
      )}
    </span>
  )
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string
  children: ReactNode
  variant?: "primary" | "outline" | "white" | "white-outline"
  className?: string
}) {
  const styles = {
    primary:
      "bg-primary text-background-dark shadow-lg shadow-primary/20 hover:bg-primary-dark",
    outline:
      "border border-secondary/40 bg-white/70 text-text-primary-light hover:border-secondary hover:bg-secondary/5 dark:bg-surface-dark dark:text-white",
    white:
      "bg-white text-text-primary-light shadow-lg shadow-background-dark/10 hover:bg-background-light",
    "white-outline":
      "border border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white/20",
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}

function SectionTitle({
  eyebrow,
  title,
  copy,
  align = "center",
  light = false,
}: {
  eyebrow: string
  title: string
  copy?: string
  align?: "center" | "left"
  light?: boolean
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}
    >
      <p
        className={`mb-3 text-xs font-medium uppercase tracking-widest ${
          light ? "text-primary" : "text-primary-dark"
        }`}
      >
        {eyebrow}
      </p>
      <motion.h2
        className={`font-display text-4xl font-semibold leading-tight tracking-tight sm:text-headline-section ${
          light ? "text-white" : "text-text-primary-light dark:text-white"
        }`}
      >
        {title}
      </motion.h2>
      {copy && (
        <p
          className={`mt-4 text-base leading-7 ${
            light
              ? "text-white/65"
              : "text-text-secondary-light dark:text-text-secondary-dark"
          }`}
        >
          {copy}
        </p>
      )}
    </motion.div>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-light/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-background-dark/85">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <motion.a
          href="#inicio"
          aria-label="MindGlow — início"
          whileHover={{ scale: 1.03 }}
        >
          <Logo className="size-11" />
        </motion.a>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {[
            ["Sobre", "#sobre"],
            ["Funcionalidades", "#funcionalidades"],
            ["Como funciona", "#como-funciona"],
            ["Segurança", "#seguranca"],
          ].map(([label, href]) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ y: -1 }}
              className="text-sm font-semibold text-text-secondary-light transition-colors hover:text-primary-dark dark:text-text-secondary-dark dark:hover:text-primary"
            >
              {label}
            </motion.a>
          ))}
        </nav>
        <ButtonLink href="#download" className="px-4 py-2.5">
          Download
          <ArrowRight className="size-4" />
        </ButtonLink>
      </div>
    </header>
  )
}

function Hero() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 70])

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-white via-primary-light/70 to-white pt-32 dark:from-background-dark dark:via-surface-dark dark:to-primary/10"
    >
      <div className="pointer-events-none absolute -left-24 top-36 size-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-20 size-80 rounded-full bg-secondary/10 blur-3xl" />
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 pt-8"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-3 py-1.5 text-xs font-medium tracking-wide text-primary-dark shadow-sm backdrop-blur dark:bg-white/10 dark:text-primary"
          >
            <Sparkles className="size-3.5" />
            Cuidado que acompanha a sua rotina
          </motion.div>
          <motion.h1
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-5xl font-bold leading-none tracking-tight text-text-primary-light dark:text-white sm:text-headline-hero"
          >
            Cuide da sua mente,{" "}
            <span className="text-primary-dark dark:text-primary">
              todos os dias.
            </span>
          </motion.h1>
          <motion.p
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-7 text-text-secondary-light dark:text-text-secondary-dark sm:text-lg sm:leading-8"
          >
            Autocuidado diário, especialistas qualificados e um plano feito para
            você. Psicologia, nutrição e preparação física em um único lugar.
          </motion.p>
          <motion.div
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#download">
              <Apple className="size-5" />
              Baixar para iOS
            </ButtonLink>
            <ButtonLink href="#download" variant="outline">
              <Play className="size-5 fill-current" />
              Baixar para Android
            </ButtonLink>
          </motion.div>
          <motion.div
            variants={reveal}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-secondary-light dark:text-text-secondary-dark"
          >
            {["Profissionais verificados", "Acompanhamento seguro"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          style={reducedMotion ? undefined : { y: heroY }}
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2.25rem]"
          >
            <img
              src={meditationImage}
              alt="Mulher em momento de meditação e autocuidado"
              className="block h-auto w-full rounded-[1.85rem] object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            className="absolute -bottom-8 -left-4 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 pr-5 shadow-xl backdrop-blur dark:border-white/10 dark:bg-surface-dark/90"
          >
            <img src={logo} alt="" className="size-16 object-contain" />
            <span>
              <span className="block text-sm font-bold text-text-primary-light dark:text-white">
                Seu espaço seguro
              </span>
              <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                Cuidado integrado
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="sobre"
      className="bg-surface-light py-24 dark:bg-background-dark"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto grid size-56 place-items-center rounded-[2rem] bg-secondary/8"
        >
          <div className="absolute inset-5 rounded-[1.6rem] border border-secondary/15" />
          <HeartHandshake
            className="size-20 text-secondary"
            strokeWidth={1.4}
          />
        </motion.div>
        <div>
          <SectionTitle
            eyebrow="O que é"
            title="Bem-estar completo, com você no centro"
            align="left"
          />
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-6 space-y-4 text-lg leading-8 text-text-secondary-light dark:text-text-secondary-dark"
          >
            <p>
              O MindGlow é uma plataforma móvel que transforma cuidado em uma
              prática possível, próxima e consistente — sem julgamentos e sem
              complicação.
            </p>
            <p>
              A tecnologia aproxima você de especialistas em psicologia,
              nutrição e preparação física, enquanto organiza hábitos, emoções e
              aprendizados em uma jornada única.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const features: Array<{
  icon: Icon
  title: string
  description: string
  color: string
}> = [
  {
    icon: Smile,
    title: "Acompanhamento de humor",
    description:
      "Registre como você se sente e reconheça padrões ao longo do tempo.",
    color: "bg-primary-light text-primary-dark",
  },
  {
    icon: Video,
    title: "Teleconsultas em HD",
    description:
      "Conecte-se a especialistas qualificados de onde você estiver.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BookOpen,
    title: "Conteúdo educacional",
    description:
      "Conteúdos confiáveis para decisões mais conscientes no dia a dia.",
    color: "bg-success/10 text-success",
  },
  {
    icon: ClipboardList,
    title: "Rotinas personalizadas",
    description:
      "Planos e prescrições que respeitam seu momento e seus objetivos.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bell,
    title: "Tudo no tempo certo",
    description:
      "Lembretes e notificações centralizadas para manter a continuidade.",
    color: "bg-warning/15 text-warning",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e privacidade",
    description:
      "Seus dados protegidos para você cuidar de si com tranquilidade.",
    color: "bg-primary-light text-primary-dark",
  },
]

function Features() {
  return (
    <section
      id="funcionalidades"
      className="bg-gradient-to-b from-white via-primary-light/40 to-white py-24 dark:from-surface-dark dark:via-background-dark dark:to-surface-dark"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Uma jornada integrada"
          title="Cuidado que entende o todo"
          copy="Ferramentas simples e especialistas próximos para apoiar mente, corpo e rotina."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description, color }) => (
            <motion.article
              key={title}
              variants={reveal}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-border-light bg-surface-light p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/5 dark:border-white/10 dark:bg-background-dark"
            >
              <div
                className={`grid size-12 place-items-center rounded-xl ${color}`}
              >
                <Icon className="size-6" strokeWidth={1.8} />
              </div>
              <motion.h3 className="mt-6 text-card-title font-semibold text-text-primary-light dark:text-white">
                {title}
              </motion.h3>
              <p className="mt-2 leading-7 text-text-secondary-light dark:text-text-secondary-dark">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const steps: Array<{ icon: Icon title: string copy: string }> = [
  {
    icon: UserRound,
    title: "Crie o seu perfil",
    copy: "Conte seus objetivos e escolha as áreas de cuidado.",
  },
  {
    icon: HeartPulse,
    title: "Cuide-se diariamente",
    copy: "Acompanhe seu humor, hábitos e conteúdos recomendados.",
  },
  {
    icon: Video,
    title: "Consulte sob demanda",
    copy: "Encontre o especialista ideal e converse por vídeo.",
  },
  {
    icon: Sparkles,
    title: "Evolua com continuidade",
    copy: "Receba rotinas personalizadas e acompanhe sua evolução.",
  },
]

function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="overflow-hidden bg-surface-light py-24 dark:bg-background-dark"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Como funciona"
          title="Seu cuidado, passo a passo"
          copy="Comece no seu ritmo. O MindGlow conecta cada pequena ação a um plano de evolução contínua."
        />
        <div className="relative mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px origin-left bg-gradient-to-r from-primary via-secondary to-primary lg:block"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 lg:grid-cols-4"
          >
            {steps.map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                key={title}
                variants={reveal}
                className="relative flex gap-5 lg:block lg:text-center"
              >
                <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border-4 border-white bg-primary text-background-dark shadow-lg shadow-primary/20 dark:border-background-dark">
                  <Icon className="size-5" />
                </div>
                <div className="lg:mt-6">
                  <span className="font-display text-3xl font-bold text-primary-dark dark:text-primary">
                    0{index + 1}
                  </span>
                  <motion.h3 className="mt-1 text-xl font-semibold text-text-primary-light dark:text-white">
                    {title}
                  </motion.h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
                    {copy}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-24 grid items-center gap-12 rounded-[2rem] bg-card-brown p-6 text-white sm:p-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={consultationImage}
              alt="Especialista pronta para uma teleconsulta"
              className="block h-auto w-full object-contain"
            />
          </motion.div>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1.5 text-xs font-bold text-white">
              <Video className="size-4" />
              Consulta conectada
            </span>
            <motion.h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Profissionais que enxergam você por inteiro
            </motion.h3>
            <p className="mt-4 leading-7 text-white/65">
              Psicologia, nutrição e preparação física compartilham uma visão
              integrada da sua jornada — sempre com o seu consentimento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const securityItems: Array<{ icon: Icon title: string copy: string }> = [
  {
    icon: LockKeyhole,
    title: "Criptografia",
    copy: "Proteção de ponta a ponta nas interações sensíveis.",
  },
  {
    icon: ShieldCheck,
    title: "Dados isolados",
    copy: "Acesso controlado e informações compartimentadas.",
  },
  {
    icon: EyeOff,
    title: "Privacidade real",
    copy: "Você decide o que compartilhar e com quem.",
  },
]

function Security() {
  return (
    <section
      id="seguranca"
      className="relative overflow-hidden bg-gradient-to-b from-white via-primary-light/50 to-white py-24"
    >
      <div className="absolute right-0 top-0 size-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
          {securityItems.map(({ icon: Icon, title, copy }) => (
            <motion.article
              key={title}
              variants={reveal}
              className="rounded-2xl border border-primary/15 bg-white/85 p-5 shadow-lg shadow-primary/5 backdrop-blur"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-primary-light">
                <Icon className="size-6 text-primary-dark" />
              </div>
              <motion.h3 className="mt-5 text-xl font-semibold text-text-primary-light">
                {title}
              </motion.h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary-light">
                {copy}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Ecosystem() {
  return (
    <section className="bg-gradient-to-b from-white via-primary-light/30 to-white py-24 dark:from-surface-dark dark:via-background-dark dark:to-surface-dark">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, rotate: -2, x: -30 }}
          whileInView={{ opacity: 1, rotate: -1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem]"
        >
          <img
            src={progressImage}
            alt="Pessoa acompanhando seu progresso pelo celular"
            className="block h-auto w-full rounded-[1.6rem] object-contain"
          />
        </motion.div>
        <div>
          <SectionTitle
            eyebrow="Ecossistema conectado"
            title="Você evolui. Sua equipa acompanha."
            align="left"
          />
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 text-lg leading-8 text-text-secondary-light dark:text-text-secondary-dark"
          >
            Com o MindGlow Specialist, profissionais recebem atualizações em
            tempo real, adaptam rotinas e mantêm a continuidade entre consultas.
          </motion.p>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-7 grid gap-3 sm:grid-cols-2"
          >
            {[
              [MessageCircle, "Comunicação contínua"],
              [Dumbbell, "Planos que evoluem com você"],
            ].map(([ItemIcon, label]) => {
              const ListedIcon = ItemIcon as Icon
              return (
                <span
                  key={label as string}
                  className="inline-flex items-center gap-3 rounded-xl border border-border-light bg-white p-4 text-sm font-semibold text-text-primary-light dark:border-white/10 dark:bg-background-dark dark:text-white"
                >
                  <ListedIcon className="size-5 text-secondary" />
                  {label as string}
                </span>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section
      id="download"
      className="bg-white px-5 pb-24 dark:bg-surface-dark sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark to-secondary px-6 py-16 text-center shadow-2xl shadow-primary/20 sm:px-12 sm:py-20"
      >
        <div className="absolute -left-12 -top-12 size-48 rounded-full border border-white/20" />
        <div className="absolute -bottom-20 -right-10 size-72 rounded-full border border-white/15" />
        <motion.h2 className="relative font-display text-4xl font-semibold tracking-tight text-white sm:text-headline-section">
          Seu bem-estar começa agora.
        </motion.h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">
          Dê o primeiro passo para uma rotina mais consciente, equilibrada e
          acompanhada.
        </p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="#" variant="white">
            <Apple className="size-5" />
            Baixar para iOS
          </ButtonLink>
          <ButtonLink href="#" variant="white-outline">
            <Play className="size-5 fill-current" />
            Baixar para Android
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border-light bg-gradient-to-b from-white to-primary-light/50 text-text-primary-light">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 border-b border-primary/15 pb-10 md:grid-cols-[1.4fr_0.6fr_0.8fr]">
          <div>
            <Logo className="size-14" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-text-secondary-light">
              Tecnologia e cuidado humano para apoiar uma vida mais consciente,
              saudável e conectada.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-text-primary-light">Legal</p>
            <div className="mt-4 flex flex-col gap-3">
              {["Termos de uso", "Privacidade"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 3 }}
                  className="text-sm text-text-secondary-light hover:text-primary-dark"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-text-primary-light">
              Fale conosco
            </p>
            <motion.a
              href="mailto:ola@mindglow.app"
              whileHover={{ x: 3 }}
              className="mt-4 inline-flex items-center gap-2 text-sm text-text-secondary-light hover:text-primary-dark"
            >
              <Mail className="size-4" />
              ola@mindglow.app
            </motion.a>
            <div className="mt-5 flex gap-3">
              {[AtSign, Globe2].map((SocialIcon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={index === 0 ? "Rede social" : "Website"}
                  whileHover={{ y: -2, color: "var(--color-primary)" }}
                  className="grid size-10 place-items-center rounded-full border border-primary/20 bg-white text-text-secondary-light"
                >
                  <SocialIcon className="size-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <p className="pt-7 text-xs text-text-secondary-light">
          © 2025 MindGlow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface-light font-sans text-text-primary-light antialiased dark:bg-background-dark dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Security />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
