export interface IPortfolioCertificationModel {
  name: string,
  level?: number | string,
  certificationDate: Date,
  expiryDate?: Date | number,
  score: number | string
}