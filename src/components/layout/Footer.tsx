import { AtSign, Globe2, Mail } from "lucide-react"
import { motion } from "motion/react"
import { SUPPORT_EMAIL } from "../../constants/links"
import { legalLinks } from "../../data/navigation"
import { Logo } from "../common/Logo"

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-gradient-to-b from-white to-primary-light/50 text-text-primary-light dark:border-white/10 dark:from-background-dark dark:to-surface-dark dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <div className="grid gap-10 border-b border-primary/15 pb-10 md:grid-cols-[1.4fr_0.6fr_0.8fr]">
          {/* Marca e Descrição */}
          <div>
            <Logo className="h-16 w-52 sm:h-24 sm:w-72" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-text-secondary-light dark:text-text-secondary-dark">
              Tecnologia e cuidado humano para apoiar uma vida mais consciente,
              saudável e conectada.
            </p>
          </div>

          {/* Links Legais */}
          <div>
            <p className="text-sm font-bold text-text-primary-light dark:text-white">
              Legal
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {legalLinks.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 3 }}
                  className="text-sm text-text-secondary-light transition-colors hover:text-primary-dark dark:text-text-secondary-dark dark:hover:text-primary"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contato & Redes */}
          <div>
            <p className="text-sm font-bold text-text-primary-light dark:text-white">
              Fale conosco
            </p>
            <motion.a
              href={`mailto:${SUPPORT_EMAIL}`}
              whileHover={{ x: 3 }}
              className="mt-4 inline-flex items-center gap-2 text-sm text-text-secondary-light transition-colors hover:text-primary-dark dark:text-text-secondary-dark dark:hover:text-primary"
            >
              <Mail className="size-4 shrink-0" />
              <span className="break-all">{SUPPORT_EMAIL}</span>
            </motion.a>
            <div className="mt-5 flex gap-3">
              {[AtSign, Globe2].map((SocialIcon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={index === 0 ? "Rede social" : "Website"}
                  whileHover={{ y: -2 }}
                  className="grid size-10 place-items-center rounded-full border border-primary/20 bg-white text-text-secondary-light shadow-sm transition-colors hover:border-primary hover:text-primary-dark dark:border-white/15 dark:bg-surface-dark dark:text-white"
                >
                  <SocialIcon className="size-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 sm:flex-row">
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            © {new Date().getFullYear()} MindGlow. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
            <span>Desenvolvido pela</span>
            <motion.a
              href="https://www.kodeza.dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide shadow-sm transition-all"
              style={{
                backgroundColor: "#203627",
                color: "#E8FF40",
                border: "1px solid rgba(157, 196, 213, 0.4)",
              }}
            >
              <span
                className="size-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#E8FF40" }}
              />
              <span>Kodeza</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
