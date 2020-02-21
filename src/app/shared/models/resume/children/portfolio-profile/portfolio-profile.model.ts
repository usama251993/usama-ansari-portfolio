import { IPortfolioContactModel } from './portfolio-contact/portfolio-contact.model';

export interface IPortfolioProfileModel {
  photo?: {
    path: string
  },
  description?: {
    statements: string[]
  },
  contacts: IPortfolioContactModel[]
}