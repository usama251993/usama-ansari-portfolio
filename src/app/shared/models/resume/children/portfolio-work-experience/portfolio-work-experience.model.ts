import { IPortfolioSkillModel } from '../portfolio-expertise/portfolio-skillset/portfolio-skill/portfolio-skill.model';

export interface IPortfolioWorkExperienceModel {
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
      skills?: IPortfolioSkillModel[]
    }
  }[]
}