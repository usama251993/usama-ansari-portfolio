import { PortfolioProfileModel } from '../children/portfolio-profile/portfolio-profile.model';
import { PortfolioBiodataModel } from '../children/portfolio-biodata/portfolio-biodata.model';
import { PortfolioWorkExperienceModel } from '../children/portfolio-work-experience/portfolio-work-experience.model';
import { PortfolioSkillsetModel } from '../children/portfolio-expertise/portfolio-skillset/portfolio-skillset.model';
import { PortfolioCertificationModel } from '../children/portfolio-expertise/portfolio-certification/portfolio-certification.model';

export interface PortfolioResumeModel {
  profile: PortfolioProfileModel,
  biodata: PortfolioBiodataModel,
  workExperience: PortfolioWorkExperienceModel,
  expertise: {
    skillset: PortfolioSkillsetModel[],
    certifications: PortfolioCertificationModel[]
  }
}