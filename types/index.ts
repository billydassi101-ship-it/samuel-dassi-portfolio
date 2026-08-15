export interface Project {
  slug: string
  title: string
  shortDescription: string
  description: string
  category: string
  technologies: string[]
  featured: boolean
  status?: string
  github?: string
  demo?: string
  image?: string
  video?: string
  highlights?: string[]
  metrics?: string[]
}

export interface Skill {
  name: string
  category: string
  isNotion?: boolean
  icon?: string
}

export interface Experience {
  id: string
  period: string
  degree: string
  specialization?: string
  institution: string
  location: string
}

export interface Service {
  id: string
  title: string
  description: string
  technologies: string[]
  iconName: string
}
