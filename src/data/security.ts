import { EyeOff, LockKeyhole, ShieldCheck } from "lucide-react"
import type { SecurityItem } from "../types"

export const securityItemsList: SecurityItem[] = [
  {
    icon: LockKeyhole,
    title: "Criptografia Ponta a Ponta",
    copy: "Transmissão segura e sigilosa em todas as chamadas de vídeo e trocas de dados.",
  },
  {
    icon: ShieldCheck,
    title: "Isolamento de Dados Clínicos",
    copy: "Registos de humor, histórico de consultas e prescrições estritamente protegidos.",
  },
  {
    icon: EyeOff,
    title: "Sigilo Profissional e Consentimento",
    copy: "Conformidade com normativas de saúde: tu decides com quem e quando partilhar a tua evolução.",
  },
]
