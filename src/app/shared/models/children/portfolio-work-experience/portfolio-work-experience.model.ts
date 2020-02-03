export interface PortfolioWorkExperienceModel {
  projects: {
    tenure: {
      from: Date,
      to: Date,
    },
    description: {
      title: string,
      role: string,
      overviews: string[],
      responsibilities?: string[],
      skills?: string[]
    }
  }
}