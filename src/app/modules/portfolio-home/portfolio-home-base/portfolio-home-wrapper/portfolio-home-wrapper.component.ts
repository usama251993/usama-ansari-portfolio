import { Component, OnInit, Input } from '@angular/core';
import { IPortfolioHomeItemModel } from './portfolio-home-item/portfolio-home-item.model';
import { IPortfolioResumeModel } from 'src/app/shared/models/resume/master/portfolio-resume.model';

@Component({
  selector: 'app-portfolio-home-wrapper',
  templateUrl: './portfolio-home-wrapper.component.html',
  styleUrls: ['./portfolio-home-wrapper.component.scss']
})
export class PortfolioHomeWrapperComponent implements OnInit {

  @Input() oComponentAssets: IPortfolioHomeItemModel[];
  @Input() mResumeModel: IPortfolioResumeModel;

  constructor(
  ) { }

  ngOnInit() { }
}
