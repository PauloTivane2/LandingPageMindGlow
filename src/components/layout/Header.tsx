import { useEffect, useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import simpleLogo from "../../assets/logos/mindglow-simple.png"
import { CLIENT_APP_URL } from "../../constants/links"
import { mainNavItems } from "../../data/navigation"
import { ButtonLink } from "../common/ButtonLink"
import { Logo } from "../common/Logo"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Prevenir rolagem do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border-light/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-background-dark/85">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          <motion.a
            href="#inicio"
            aria-label="MindGlow — início"
            whileHover={{ scale: 1.03 }}
            className="shrink-0"
          >
            <Logo className="h-9 w-32 sm:h-10 sm:w-40" image={simpleLogo} />
          </motion.a>

          {/* Navegação Desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex md:items-center md:gap-7"
          >
            {mainNavItems.map(({ label, href }) => (
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

          {/* Ações de Header & Botão Hambúrguer */}
          <div className="flex items-center gap-2">
            <ButtonLink href="#download" className="hidden px-4 py-2.5 sm:inline-flex">
              Download
              <ArrowRight className="size-4" />
            </ButtonLink>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-full border border-border-light text-text-primary-light transition-colors hover:bg-black/5 md:hidden dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile com Animação e Backdrop */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 right-4 top-[5.25rem] z-50 flex flex-col gap-2 rounded-2xl border border-border-light bg-white p-5 shadow-2xl md:hidden dark:border-white/10 dark:bg-surface-dark"
            >
              {mainNavItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={handleLinkClick}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-text-primary-light transition-colors hover:bg-primary/10 hover:text-primary-dark dark:text-white dark:hover:bg-white/5"
                >
                  {label}
                </a>
              ))}
              <div className="mt-2 grid gap-2 border-t border-border-light pt-3 dark:border-white/10">
                <a
                  href={CLIENT_APP_URL}
                  download="mindglow.apk"
                  onClick={(e) => {
                    handleLinkClick()
                    e.preventDefault()
                    window.location.assign(CLIENT_APP_URL)
                  }}
                  className="flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-background-dark shadow-md active:bg-primary-dark"
                >
                  Baixar o app
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop para fechar ao tocar fora no mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
