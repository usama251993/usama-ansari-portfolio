import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { tap, debounceTime, takeUntil, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface IDOMElements {
  scrollbarContainer: HTMLDivElement,
  scrollbarTrack: HTMLDivElement
}

interface IScrollState {
  documentEl: Document,
  state: boolean
}

@Component({
  selector: 'app-portfolio-scrollbar',
  templateUrl: './portfolio-scrollbar.component.html',
  styleUrls: ['./portfolio-scrollbar.component.scss']
})
export class PortfolioScrollbarComponent implements OnInit {

  @ViewChild('scrollbarContainer', { static: true }) scrollbarContainer: ElementRef;
  @ViewChild('scrollbarTrack', { static: true }) scrollbarTrack: ElementRef;
  oDOMElements: IDOMElements;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  sScroll$: Subscription;
  sDrag$: Subscription;

  oMouseDown$: Observable<Event>;
  oMouseLeave$: Observable<Event>;
  oMouseMove$: Observable<Event>;
  oMouseUp$: Observable<Event>;

  bIsScrolling: boolean;

  ngOnInit() {
    this.oDOMElements = {
      scrollbarContainer: this.scrollbarContainer.nativeElement,
      scrollbarTrack: this.scrollbarTrack.nativeElement
    }

    // Reference: https://stackblitz.com/edit/angular-dumymv
    this.sScroll$ = fromEvent(window, 'scroll').pipe(
      tap((eventData: Event) => {
        this.bIsScrolling = true;
        this.handleScrollbarHeight({ documentEl: (eventData.target as Document), state: this.bIsScrolling });
      }),
      debounceTime(500)
    ).subscribe((eventData: Event) => {
      this.bIsScrolling = false;
      this.handleScrollbarHeight({ documentEl: (eventData.target as Document), state: this.bIsScrolling });
    });

    this.oMouseMove$ = fromEvent(this.oDOMElements.scrollbarContainer, 'mousemove');
    this.oMouseUp$ = fromEvent(this.oDOMElements.scrollbarContainer, 'mouseup');
    this.oMouseDown$ = fromEvent(this.oDOMElements.scrollbarContainer, 'mousedown');
    this.oMouseLeave$ = fromEvent(this.oDOMElements.scrollbarContainer, 'mouseleave');

    // Reference: https://medium.com/@jdjuan/mouse-drag-with-rxjs-45861c4d0b7e
    this.sDrag$ = this.oMouseDown$.pipe(
      mergeMap((mouseDownEvent: MouseEvent) => {
        this.handleScroll(mouseDownEvent, { documentEl: document, state: this.bIsScrolling });
        return this.oMouseMove$.pipe(
          takeUntil(this.oMouseUp$),
          takeUntil(this.oMouseLeave$)
        )
      })
    ).subscribe((mouseDragEvent: MouseEvent) => {
      this.handleScroll(mouseDragEvent, { documentEl: document, state: this.bIsScrolling });
    });
  }

  handleScrollbarHeight(scrollState: IScrollState) {
    let sScrollbarTrackHeight: string = '';
    //                                         scrollTop
    // sScrollbarTrackHeight = 100 - ───────────────────────────── %
    //                                scrollHeight - clientHeight
    sScrollbarTrackHeight = (100 -
      (scrollState.documentEl.documentElement.scrollTop /
        (scrollState.documentEl.documentElement.scrollHeight -
          scrollState.documentEl.documentElement.clientHeight)) *
      100).toString() + '%';

    this.renderer.setStyle(this.oDOMElements.scrollbarTrack, 'height', sScrollbarTrackHeight);
    if (scrollState.state) {
      this.renderer.setStyle(this.oDOMElements.scrollbarContainer, 'opacity', '1');
    } else {
      this.renderer.removeAttribute(this.oDOMElements.scrollbarContainer, 'style');
    }
  }

  handleScroll(mouseEvent: MouseEvent, scrollState: IScrollState) {

    let sScrollTo: string = '';
    let nScrollTo: number = 0;
    let nScrollHeight: number = 0;

    nScrollTo = mouseEvent.clientY / scrollState.documentEl.documentElement.clientHeight;
    sScrollTo = (100 - nScrollTo * 100).toFixed(2) + '%';
    nScrollHeight = nScrollTo * (scrollState.documentEl.documentElement.scrollHeight - scrollState.documentEl.documentElement.clientHeight);

    this.renderer.setStyle(this.oDOMElements.scrollbarTrack, 'height', sScrollTo);
    scrollState.documentEl.documentElement.scrollTo(0, nScrollHeight);
  }

  toggleScrollbarDisplay() {
    fromEvent(window, 'load').pipe()
    fromEvent(window, 'resize').pipe()
  }

}
