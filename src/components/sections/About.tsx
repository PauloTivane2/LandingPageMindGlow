import { HeartHandshake } from "lucide-react"
import { motion } from "motion/react"
import { SectionTitle } from "../common/SectionTitle"
import { reveal } from "../common/animations"

export function About() {
  return (
    <section
      id="sobre"
      className="bg-transparent py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        {/* Emblema Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto grid size-40 place-items-center rounded-[2rem] bg-secondary/10 sm:size-52"
        >
          <div className="absolute inset-3.5 rounded-[1.6rem] border border-secondary/20 sm:inset-4" />
          <HeartHandshake
            className="size-16 text-secondary sm:size-20"
            strokeWidth={1.4}
          />
        </motion.div>

        {/* Informações Alinhadas com a Proposta de Valor */}
        <div>
          <SectionTitle
            eyebrow="O que é"
            title="Bem-estar completo, contigo no centro"
            align="left"
          />
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary-light sm:text-base sm:leading-7 lg:text-lg lg:leading-8 dark:text-text-secondary-dark"
          >
            <p>
              O <strong>MindGlow</strong> é uma solução móvel focada no cuidado contínuo da saúde
              mental, equilíbrio emocional e hábitos saudáveis — unindo telemedicina,
              recursos terapêuticos digitais e gestão de rotinas numa experiência centrada na pessoa.
            </p>
            <p>
              A tecnologia conecta-te a uma rede multidisciplinar de especialistas
              credenciados em <strong>Psicologia</strong>, <strong>Nutrição Clínica</strong> e <strong>Preparação Física</strong>,
              organizando registos diários, tarefas prescritas e consultas em vídeo num único ambiente seguro.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
