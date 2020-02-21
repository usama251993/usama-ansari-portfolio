import { IPortfolioNavbarContentModel } from './portfolio-navbar-content/portfolio-navbar-content.model';

export interface IPortfolioNavbarAssetsModel {
  context: string,
  contents: IPortfolioNavbarContentModel[]
}