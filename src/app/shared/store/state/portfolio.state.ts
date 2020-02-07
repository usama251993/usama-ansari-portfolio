import { PortfolioResumeModel } from '../../models/master/portfolio-resume.model';

export interface PortfolioResumeState {
  resumeData: PortfolioResumeModel;
}

export const initialPortfolioState = {
  resumeData: null
};

export function getInitialPortfolioState() {
  return initialPortfolioState;
}

// For Reference
// https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc
