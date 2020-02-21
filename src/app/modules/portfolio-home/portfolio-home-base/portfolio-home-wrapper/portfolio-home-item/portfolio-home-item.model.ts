import { IPortfolioComponentCommonModel } from 'src/app/shared/models/common/portfolio-component/portfolio-component-common.model';

export interface IPortfolioHomeItemModel {
  commonAssets: IPortfolioComponentCommonModel[]
  viewName: string,
}