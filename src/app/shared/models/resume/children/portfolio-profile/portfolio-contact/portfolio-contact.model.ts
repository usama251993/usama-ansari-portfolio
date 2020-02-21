import { IPortfolioIconModel } from '../../../../common/portfolio-icon/portfolio-icon.model';

export interface IPortfolioContactModel {
  icon?: IPortfolioIconModel,
  detail: {
    attributeTitle?: string,
    clickAction?: string,
    content: string
  }
}