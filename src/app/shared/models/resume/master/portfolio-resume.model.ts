import { IPortfolioProfileModel } from '../children/portfolio-profile/portfolio-profile.model';
import { IPortfolioBiodataModel } from '../children/portfolio-biodata/portfolio-biodata.model';
import { IPortfolioWorkExperienceModel } from '../children/portfolio-work-experience/portfolio-work-experience.model';
import { IPortfolioSkillsetModel } from '../children/portfolio-expertise/portfolio-skillset/portfolio-skillset.model';
import { IPortfolioCertificationModel } from '../children/portfolio-expertise/portfolio-certification/portfolio-certification.model';

export interface IPortfolioResumeModel {
  profile: IPortfolioProfileModel,
  biodata: IPortfolioBiodataModel,
  workExperience: IPortfolioWorkExperienceModel,
  expertise: {
    skillset: IPortfolioSkillsetModel[],
    certifications: IPortfolioCertificationModel[]
  }
}