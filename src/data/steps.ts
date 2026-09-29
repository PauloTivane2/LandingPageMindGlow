import { HeartPulse, Sparkles, UserRound, Video } from "lucide-react"
import type { StepItem } from "../types"

export const howItWorksSteps: StepItem[] = [
  {
    icon: UserRound,
    title: "Acolhimento e Perfil",
    copy: "Define as tuas prioridades de saúde, focos de melhoria e preferências de rotina de forma simples.",
  },
  {
    icon: HeartPulse,
    title: "Engajamento Diário",
    copy: "Regista o teu humor, realiza atividades prescritas e consome conteúdos educativos recomendados.",
  },
  {
    icon: Video,
    title: "Cuidado Profissional",
    copy: "Escolhe especialistas em Psicologia, Nutrição ou Exercício e consulta por vídeo em alta definição.",
  },
  {
    icon: Sparkles,
    title: "Continuidade Terapêutica",
    copy: "Acede aos planos alimentares, exercícios e tarefas prescritos para manter a constância da tua evolução.",
  },
]
