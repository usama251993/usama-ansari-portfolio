import { IPortfolioNavbarTriggerModel } from '../children/portfolio-navbar-trigger/portfolio-navbar-trigger.model';
import { IPortfolioNavbarStateModel } from '../children/portfolio-navbar-state/portfolio-navbar-state.model';
import { IPortfolioNavbarContentModel } from '../children/portfolio-navbar-assets/portfolio-navbar-content/portfolio-navbar-content.model';

export interface IPortfolioNavbarModel {
  triggers: IPortfolioNavbarTriggerModel[],
  state: IPortfolioNavbarStateModel,
  contents: IPortfolioNavbarContentModel[]
}