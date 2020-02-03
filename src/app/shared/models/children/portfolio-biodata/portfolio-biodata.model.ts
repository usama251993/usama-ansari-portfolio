import { PortfolioNameModel } from './portfolio-name/portfolio-name.model';

export interface PortfolioBiodataModel {
  fullName: PortfolioNameModel | string,
  designation: string
}