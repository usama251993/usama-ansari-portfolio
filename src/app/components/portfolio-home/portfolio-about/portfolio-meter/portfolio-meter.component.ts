import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { PortfolioResumeModel } from 'src/app/shared/models/master/portfolio-resume.model';

@Component({
  selector: 'app-portfolio-meter',
  templateUrl: './portfolio-meter.component.html',
  styleUrls: ['./portfolio-meter.component.scss']
})
export class PortfolioMeterComponent implements OnInit {

  @ViewChild('svgCanvas', { static: true }) svgCanvas: ElementRef;
  @ViewChild('gMaskContainer', { static: true }) gMaskContainer: ElementRef;
  @ViewChild('rMasterMask', { static: true }) rMasterMask: ElementRef;
  @ViewChild('mMeter', { static: true }) mMeter: ElementRef;
  @ViewChild('pSector', { static: true }) pSector: ElementRef;
  @ViewChild('cMidHollow', { static: true }) cMidHollow: ElementRef;
  @ViewChild('gIndicator', { static: true }) gIndicator: ElementRef;
  @ViewChild('gPointer', { static: true }) gPointer: ElementRef;

  elementObject: {} = null;

  skillRating: number = null;
  @Input('skillsBind') skills: PortfolioResumeModel['expertise']['skillset'][];
  // dummySkills: { name: string, rating: number }[] = [];

  unitVector: SVGPoint = null;
  transformMatrix: SVGMatrix = null;

  dimensionObject: {} = {};

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // this.dummySkills = [
    //   { name: 'HTML5', rating: 5 },
    //   { name: 'CSS3', rating: 5 },
    //   { name: 'JS', rating: 4.5 },
    //   { name: 'Java', rating: 2.5 },
    //   { name: 'Python', rating: 3 },
    //   { name: 'MySQL', rating: 2 }
    // ];

    this.initSVGElements();
  }

  initSVGElements() {
    this.elementObject = {
      // <svg id="svg-canvas">
      svgCanvas: this.svgCanvas.nativeElement,

      mask: {
        // <g id="mask-container">
        gMaskContainer: this.gMaskContainer.nativeElement,

        // <rect id="bg">
        rMasterMask: this.rMasterMask.nativeElement,

        // <mask id="indicator-mask">
        mMeter: this.mMeter.nativeElement,

        element: {
          // <path id="sector">
          pSector: this.pSector.nativeElement,

          // <circle id="mid-hollow">
          cMidHollow: this.cMidHollow.nativeElement,

          // <line class="indicator-separator">
          lMeterSeparator: this.renderer.createElement('line', 'http://www.w3.org/2000/svg')
        }
      },

      base: {

        // <g id="meter-circle">
        gIndicator: this.gIndicator.nativeElement,

        // <circle id="indicator">
        cIndicator: this.renderer.createElement('circle', 'http://www.w3.org/2000/svg')
      },

      overlay: {

        // <g id="meter-pointer">
        gPointer: this.gPointer.nativeElement,

        // <circle id="pinion">
        cPinion: this.renderer.createElement('circle', 'http://www.w3.org/2000/svg'),

        // <line id="needle">
        lNeedle: this.renderer.createElement('line', 'http://www.w3.org/2000/svg')
      }

    };

    this.unitVector = this.elementObject['svgCanvas'].createSVGPoint();
    this.unitVector.x = 0;
    this.unitVector.y = 1;
    this.transformMatrix = this.elementObject['svgCanvas'].createSVGMatrix();

    this.dimensionObject = {
      meterScale: {
        circle: {
          cx: 150,
          cy: 150,
          r: 150
        },
        sector: {
          angle: 135,
        }
      },
      ratingCount: 5,
      indicator: {
        pinion: {
          radius: 20,
        },
        needle: {
          rotation: 0,
          length: 120,
          endPoint: {
            x: 0,
            y: 0
          }
        }
      }
    }
    this.renderSVG();
  }

  renderSVG(): void {
    // Setup the Rectangular Mask to be white
    this.renderer.setAttribute(this.elementObject['mask']['rMasterMask'], 'id', 'bg');
    this.renderer.setAttribute(this.elementObject['mask']['rMasterMask'], 'x', (0).toFixed(2));
    this.renderer.setAttribute(this.elementObject['mask']['rMasterMask'], 'y', (0).toFixed(2));

    // Setup the Mask ID
    this.renderer.setAttribute(this.elementObject['mask']['mMeter'], 'id', 'indicatorMask');

    // Setup the Circle Indicator
    this.renderer.setAttribute(this.elementObject['base']['cIndicator'], 'id', 'indicator');
    this.renderer.setAttribute(this.elementObject['base']['cIndicator'], 'cx', this.dimensionObject['meterScale'].circle.cx.toFixed(2));
    this.renderer.setAttribute(this.elementObject['base']['cIndicator'], 'cy', this.dimensionObject['meterScale'].circle.cy.toFixed(2));
    this.renderer.setAttribute(this.elementObject['base']['cIndicator'], 'r', this.dimensionObject['meterScale'].circle.r.toFixed(2));

    this.renderer.appendChild(this.elementObject['base']['gIndicator'], this.elementObject['base']['cIndicator']);

    let pathD = '';
    let sectorEndpoints = {
      startPoint: {
        x: this.unitVector.matrixTransform(
          this.transformMatrix.rotate(
            this.dimensionObject['meterScale'].sector.angle / 2
          )).x * this.dimensionObject['meterScale'].circle.r,
        y: this.unitVector.matrixTransform(
          this.transformMatrix.rotate(
            this.dimensionObject['meterScale'].sector.angle / 2
          )).y * this.dimensionObject['meterScale'].circle.r
      },
      endPoint: {
        x: this.unitVector.matrixTransform(
          this.transformMatrix.rotate(
            this.dimensionObject['meterScale'].sector.angle / -2
          )).x * this.dimensionObject['meterScale'].circle.r,
        y: this.unitVector.matrixTransform(
          this.transformMatrix.rotate(
            this.dimensionObject['meterScale'].sector.angle / -2
          )).y * this.dimensionObject['meterScale'].circle.r
      },
      chordLength: 2 * this.dimensionObject['meterScale'].circle.r * Math.sin(Math.PI * this.dimensionObject['meterScale'].sector.angle / 180 / 2),
      arcLength: this.dimensionObject['meterScale'].circle.r * this.dimensionObject['meterScale'].sector.angle * Math.PI / 180
    };

    pathD = 'M ' + this.dimensionObject['meterScale'].circle.cx.toFixed(2) + ' ' + this.dimensionObject['meterScale'].circle.cy.toFixed(2) +
      ' l ' + (sectorEndpoints.startPoint.x).toFixed(2) + ' ' + (sectorEndpoints.startPoint.y).toFixed(2) +
      ' a ' + this.dimensionObject['meterScale'].circle.r.toFixed(2) + ' ' + this.dimensionObject['meterScale'].circle.r.toFixed(2) + ' 0 0 0 ' + (sectorEndpoints.chordLength).toFixed(2) + ' 0' +
      ' Z';

    // Setup the indicator Sector
    this.renderer.setAttribute(this.elementObject['mask']['element']['pSector'], 'id', 'sector');
    this.renderer.setAttribute(this.elementObject['mask']['element']['pSector'], 'd', pathD);

    // Setup the Indicator Hollow Area
    this.renderer.setAttribute(this.elementObject['mask']['element']['cMidHollow'], 'id', 'mid-hollow');
    this.renderer.setAttribute(this.elementObject['mask']['element']['cMidHollow'], 'cx', this.dimensionObject['meterScale'].circle.cx.toFixed(2));
    this.renderer.setAttribute(this.elementObject['mask']['element']['cMidHollow'], 'cy', this.dimensionObject['meterScale'].circle.cy.toFixed(2));
    this.renderer.setAttribute(this.elementObject['mask']['element']['cMidHollow'], 'r', (this.dimensionObject['meterScale'].circle.r * 0.5).toFixed(2));

    let loopIndex = 1;

    // Setup the Indicator Separators
    while (loopIndex <= this.dimensionObject['ratingCount'] - 1) {

      let lineTransform = {
        endPointX: this.dimensionObject['meterScale'].circle.cx + this.unitVector.matrixTransform(this.transformMatrix.rotate(
          (this.dimensionObject['meterScale'].sector.angle / 2) + ((360 - this.dimensionObject['meterScale'].sector.angle) * loopIndex) / this.dimensionObject['ratingCount']
        )).x * this.dimensionObject['meterScale'].circle.r,
        endPointY: this.dimensionObject['meterScale'].circle.cy + this.unitVector.matrixTransform(this.transformMatrix.rotate(
          (this.dimensionObject['meterScale'].sector.angle / 2) + ((360 - this.dimensionObject['meterScale'].sector.angle) * loopIndex) / this.dimensionObject['ratingCount']
        )).y * this.dimensionObject['meterScale'].circle.r,
      };

      this.renderer.setAttribute(this.elementObject['mask']['element']['lMeterSeparator'], 'class', 'indicator-separator');
      this.renderer.setAttribute(this.elementObject['mask']['element']['lMeterSeparator'], 'x1', this.dimensionObject['meterScale'].circle.cx.toFixed(2));
      this.renderer.setAttribute(this.elementObject['mask']['element']['lMeterSeparator'], 'y1', this.dimensionObject['meterScale'].circle.cy.toFixed(2));
      this.renderer.setAttribute(this.elementObject['mask']['element']['lMeterSeparator'], 'x2', lineTransform.endPointX.toFixed(2));
      this.renderer.setAttribute(this.elementObject['mask']['element']['lMeterSeparator'], 'y2', lineTransform.endPointY.toFixed(2));
      this.renderer.appendChild(this.elementObject['mask']['gMaskContainer'], this.elementObject['mask']['element']['lMeterSeparator'].cloneNode(true));
      loopIndex += 1;
    }

    // Setup the Mask
    let useMasterMask: SVGUseElement = this.renderer.createElement('use', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(useMasterMask, 'href', '#' + this.elementObject['mask']['rMasterMask'].getAttribute('id'));
    this.renderer.appendChild(this.elementObject['mask']['mMeter'], useMasterMask.cloneNode(true));
    this.renderer.setAttribute(useMasterMask, 'href', '#' + this.elementObject['mask']['gMaskContainer'].getAttribute('id'));
    this.renderer.appendChild(this.elementObject['mask']['mMeter'], useMasterMask.cloneNode(true));

    // Apply the Mask
    this.renderer.setAttribute(this.elementObject['base']['cIndicator'], 'mask', 'url(#' + this.elementObject['mask']['mMeter'].getAttribute('id') + ')');

    // Setup the Pinion Circle
    this.renderer.setAttribute(this.elementObject['overlay']['cPinion'], 'id', 'pinion');
    this.renderer.setAttribute(this.elementObject['overlay']['cPinion'], 'cx', this.dimensionObject['meterScale'].circle.cx.toFixed(2));
    this.renderer.setAttribute(this.elementObject['overlay']['cPinion'], 'cy', this.dimensionObject['meterScale'].circle.cy.toFixed(2));
    this.renderer.setAttribute(this.elementObject['overlay']['cPinion'], 'r', (this.dimensionObject['indicator']['pinion']['radius']).toFixed(2));
    this.renderer.appendChild(this.elementObject['overlay']['gPointer'], this.elementObject['overlay']['cPinion']);
  }

  setSkillRating(skillIndex: number) {
    this.skillRating = this.skills[skillIndex]['rating'];

    this.dimensionObject['indicator']['needle']['rotation'] = (this.dimensionObject['meterScale'].sector.angle / 2) + ((360 - this.dimensionObject['meterScale'].sector.angle) * this.skillRating / this.dimensionObject['ratingCount']) - (((360 - this.dimensionObject['meterScale'].sector.angle) / this.dimensionObject['ratingCount']) / 2)

    this.dimensionObject['indicator']['needle']['endPoint']['x'] = this.dimensionObject['meterScale'].circle.cx + this.unitVector.matrixTransform(this.transformMatrix.rotate(this.dimensionObject['indicator']['needle']['rotation'])).x * this.dimensionObject['indicator']['needle']['length'];
    this.dimensionObject['indicator']['needle']['endPoint']['y'] = this.dimensionObject['meterScale'].circle.cy + this.unitVector.matrixTransform(this.transformMatrix.rotate(this.dimensionObject['indicator']['needle']['rotation'])).y * this.dimensionObject['indicator']['needle']['length'];

    // Setup the needle
    this.renderer.setAttribute(this.elementObject['overlay']['lNeedle'], 'x1', this.dimensionObject['meterScale'].circle.cx.toFixed(2));
    this.renderer.setAttribute(this.elementObject['overlay']['lNeedle'], 'y1', this.dimensionObject['meterScale'].circle.cy.toFixed(2));
    this.renderer.setAttribute(this.elementObject['overlay']['lNeedle'], 'x2', this.dimensionObject['indicator']['needle']['endPoint']['x'].toFixed(2));
    this.renderer.setAttribute(this.elementObject['overlay']['lNeedle'], 'y2', this.dimensionObject['indicator']['needle']['endPoint']['y'].toFixed(2));
    this.renderer.setAttribute(this.elementObject['overlay']['lNeedle'], 'id', 'needle');
    this.renderer.appendChild(this.elementObject['overlay']['gPointer'], this.elementObject['overlay']['lNeedle']);
  }

}
