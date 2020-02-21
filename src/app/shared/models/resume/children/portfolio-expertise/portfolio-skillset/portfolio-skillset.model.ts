import { IPortfolioSkillModel } from './portfolio-skill/portfolio-skill.model';

export interface IPortfolioSkillsetModel {
  type: string,
  skill: IPortfolioSkillModel[]
}