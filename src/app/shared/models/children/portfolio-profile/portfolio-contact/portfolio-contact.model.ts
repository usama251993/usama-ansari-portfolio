export interface PortfolioContactModel {
  icon?: {
    prefix: string,
    name: string,
    transform?: {
      size?: string,
      rotate?: string
    }
  },
  detail: {
    attributeTitle?: string,
    clickAction?: string,
    content: string
  }
}