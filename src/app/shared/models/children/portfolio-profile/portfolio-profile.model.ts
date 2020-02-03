import { PortfolioContactModel } from './portfolio-contact/portfolio-contact.model';

export interface PortfolioProfileModel {
  photo?: {
    path: string
  },
  description?: {
    statements: string[]
  },
  contacts: PortfolioContactModel[]
}