import { IPortfolioIconModel } from '../../../../common/portfolio-icon/portfolio-icon.model';

export interface IPortfolioNavbarContentModel {
  icon?: IPortfolioIconModel,
  detail: {
    content: string,
    clickAction?: string
  }
}