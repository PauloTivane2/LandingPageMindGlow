import defaultLogo from "../../assets/logos/mindglow-simple.png"
import type { LogoProps } from "../../types"

export function Logo({
  className = "",
  label = false,
  light = false,
  image = defaultLogo,
}: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={image}
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
