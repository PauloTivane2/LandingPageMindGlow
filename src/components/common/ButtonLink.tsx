import { motion } from "motion/react"
import type { ButtonLinkProps } from "../../types"

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  download,
  onClick,
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-primary text-background-dark shadow-lg shadow-primary/20 hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    outline:
      "border border-secondary/40 bg-white/70 text-text-primary-light hover:border-secondary hover:bg-secondary/5 dark:bg-surface-dark dark:text-white",
    white:
      "bg-white text-text-primary-light shadow-lg shadow-background-dark/10 hover:bg-background-light",
    "white-outline":
      "border border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white/20",
  }

  // Detecta se o link é para descarregar o APK
  const isApk = href.toLowerCase().endsWith(".apk") || Boolean(download)
  // Links de download de ficheiros NUNCA devem abrir abas separadas
  const isExternalPage = external && !isApk

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick()
    if (isApk) {
      // Força o descarregamento imediato sem abrir uma página em branco
      e.preventDefault()
      window.location.assign(href)
    }
  }

  return (
    <motion.a
      href={href}
      target={isExternalPage ? "_blank" : undefined}
      rel={isExternalPage ? "noreferrer" : undefined}
      download={isApk ? (typeof download === "string" ? download : "mindglow.apk") : undefined}
      onClick={handleClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}
