import type { ComponentType, ReactNode } from "react"

export type LucideIconType = ComponentType<{
  className?: string
  strokeWidth?: number
}>

export interface NavItem {
  label: string
  href: string
}

export interface FeatureItem {
  icon: LucideIconType
  title: string
  description: string
  color: string
}

export interface StepItem {
  icon: LucideIconType
  title: string
  copy: string
}

export interface SecurityItem {
  icon: LucideIconType
  title: string
  copy: string
}

export interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: "primary" | "outline" | "white" | "white-outline"
  className?: string
  external?: boolean
  download?: boolean | string
  onClick?: () => void
}

export interface SectionTitleProps {
  eyebrow: string
  title: string
  copy?: string
  align?: "center" | "left"
  light?: boolean
}

export interface LogoProps {
  className?: string
  label?: boolean
  light?: boolean
  image?: string
}
