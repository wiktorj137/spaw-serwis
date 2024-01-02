// app.component.ts

import {
  Component,
  OnInit,
  HostListener,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          'max-height': '500px' /* Maksymalna wysokość, dostosuj do potrzeb */,
          opacity: '1',
          display: 'block',
        })
      ),
      state(
        'out',
        style({
          'max-height': '0',
          opacity: '0',
          display: 'none',
        })
      ),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  activePage: string = 'app-onas';
  isVisible: boolean = false;
  isMenuOpen: boolean = false;
  displayedPage: string = 'app-onas';

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  changePg(pg: string): void {
    this.activePage = pg;

    if (this.isMobileDevice()) {
      this.isVisible = false;
      this.isMenuOpen = false;
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
    }
  }

  changeVisible(): void {
    this.isVisible = !this.isVisible;

    if (this.isMobileDevice()) {
      if (this.isVisible) {
        this.displayedPage = this.activePage;
        this.isMenuOpen = true;

        document.body.addEventListener('click', this.handleDocumentClick);

        document.body.style.overflow = 'hidden';
      } else {
        this.activePage = this.displayedPage;
        this.isMenuOpen = false;

        document.body.removeEventListener('click', this.handleDocumentClick);

        document.body.style.overflow = 'auto';
      }
    }
  }

  handleDocumentClick = (event: Event): void => {
    const target = event.target as HTMLElement;
    const menuElement = this.elRef.nativeElement.querySelector('.box');
    const buttonElement = this.elRef.nativeElement.querySelector('.przycisk');

    if (
      menuElement &&
      buttonElement &&
      !menuElement.contains(target) &&
      !buttonElement.contains(target)
    ) {
      this.isVisible = false;
      this.isMenuOpen = false;

      document.body.removeEventListener('click', this.handleDocumentClick);

      document.body.style.overflow = 'auto';
    }
  };

  ngOnInit(): void {
    this.adjustElementVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustElementVisibility();
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 767;
  }

  adjustElementVisibility(): void {
    const desktopElement = document.querySelector(
      '.buttons'
    ) as HTMLElement | null;
    const mobileElement = document.querySelector(
      '.pasek'
    ) as HTMLElement | null;
    const boxElement = document.querySelector('.box') as HTMLElement | null;

    if (desktopElement && mobileElement && boxElement) {
      if (this.isMobileDevice()) {
        desktopElement.style.display = 'none';
        mobileElement.classList.add('active');
        boxElement.classList.add('active');

        const headerHeight =
          document.querySelector('header')?.offsetHeight || 0;
        this.renderer.setStyle(boxElement, 'top', `${headerHeight}px`);
      } else {
        desktopElement.style.display = 'block';
        mobileElement.classList.remove('active');
        boxElement.classList.remove('active');
        this.renderer.setStyle(boxElement, 'top', '0');
      }

      if (this.isMenuOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }

    this.cdr.detectChanges();
  }
}
