import { IPortfolioResumeModel } from '../../models/resume/master/portfolio-resume.model';


export interface IPortfolioResumeState {
  resumeData: IPortfolioResumeModel;
}

export const initialPortfolioState = {
  resumeData: null
};

export function getInitialPortfolioState() {
  return initialPortfolioState;
}

// For Reference
// https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc
