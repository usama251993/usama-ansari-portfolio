import { PortfolioIconModel } from '../../portfolio-icon/portfolio-icon.model';

export interface PortfolioContactModel {
  icon?: PortfolioIconModel,
  detail: {
    attributeTitle?: string,
    clickAction?: string,
    content: string
  }
}