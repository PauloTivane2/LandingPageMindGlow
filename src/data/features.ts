import {
  Bell,
  BookOpen,
  ClipboardList,
  ShieldCheck,
  Smile,
  Video,
} from "lucide-react"
import type { FeatureItem } from "../types"

export const featuresList: FeatureItem[] = [
  {
    icon: Smile,
    title: "Acompanhamento Emocional",
    description:
      "Registo de humor, identificação de gatilhos, níveis de energia e rastreamento contínuo de sono e ansiedade.",
    color: "bg-primary-light text-primary-dark",
  },
  {
    icon: Video,
    title: "Teleconsultas Multidisciplinares",
    description:
      "Consultas em HD com especialistas credenciados em Psicologia, Nutrição Clínica e Preparação Física.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BookOpen,
    title: "Hub de Conteúdo Terapêutico",
    description:
      "Artigos, guias práticos e psicoeducação produzidos por profissionais, com suporte a leitura offline.",
    color: "bg-success/10 text-success",
  },
  {
    icon: ClipboardList,
    title: "Prescrições e Rotinas de Hábitos",
    description:
      "Planos alimentares, rotinas de exercícios, tarefas terapêuticas e respiração guiada entre consultas.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bell,
    title: "Notificações e Lembretes",
    description:
      "Alertas inteligentes para agendamentos, confirmações em tempo real e incentivo à adesão das rotinas.",
    color: "bg-warning/15 text-warning",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Sigilo Clínico",
    description:
      "Comunicação criptografada, proteção rigorosa de dados de saúde e confidencialidade profissional garantida.",
    color: "bg-primary-light text-primary-dark",
  },
]
