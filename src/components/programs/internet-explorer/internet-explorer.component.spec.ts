import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InternetExplorerComponent } from './internet-explorer.component';

describe('InternetExplorerComponent', () => {
  let component: InternetExplorerComponent;
  let fixture: ComponentFixture<InternetExplorerComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetExplorerComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(InternetExplorerComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.internet-explorer-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('must have proper window title', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Internet Explorer');
      });

      it('must have proper focus name', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('internet-explorer');
      });

      it('must have proper icon path', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-icon')).toBe('assets/icons/html-file.svg');
      });
    });

    it('must have frame contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });

    it('must have space for toolbar', () => {
      expect(compiled.querySelector('.toolbar')).toBeTruthy();
    });

    describe('standard buttons', () => {
      it('must exist', () => {
        expect(compiled.querySelector('.standard-buttons')).toBeTruthy();
      });

      describe('Explorer buttons', () => {
        it('must exist', () => {
          expect(compiled.querySelector('.standard-buttons .explorer-buttons')).toBeTruthy();
        });

        it('must contain a stop button', () => {
          let stdButtons = compiled.querySelectorAll('.explorer-buttons standard-button');
          let stopExists = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'stop') stopExists = true;
          });

          expect(stopExists).toBeTrue();
        });

        it('must contain a refresh button', () => {
          let stdButtons = compiled.querySelectorAll('.explorer-buttons standard-button');
          let refreshExists = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'refresh') refreshExists = true;
          });

          expect(refreshExists).toBeTrue();
        });

        it('must contain a home button', () => {
          let stdButtons = compiled.querySelectorAll('.explorer-buttons standard-button');
          let homeExists = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'home') homeExists = true;
          });

          expect(homeExists).toBeTrue();
        });
      });

      describe('Go To Buttons', () => {
        it('must exist', () => {
          expect(compiled.querySelector('.standard-buttons .go-to-buttons')).toBeTruthy();
        });

        it('must contain a search button', () => {
          let stdButtons = compiled.querySelectorAll('.go-to-buttons standard-button');
          let searchBtn = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'search') searchBtn = true;
          });

          expect(searchBtn).toBeTrue();
        });

        it('must contain a favorites button', () => {
          let stdButtons = compiled.querySelectorAll('.go-to-buttons standard-button');
          let favBtn = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'favorites') favBtn = true;
          });

          expect(favBtn).toBeTrue();
        });

        it('must contain a history button', () => {
          let stdButtons = compiled.querySelectorAll('.go-to-buttons standard-button');
          let histBtn = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'history') histBtn = true;
          });

          expect(histBtn).toBeTrue();
        });
      });

      describe('Share Buttons', () => {
        it('must exist', () => {
          expect(compiled.querySelector('.standard-buttons .share-buttons')).toBeTruthy();
        });

        it('must contain a search button', () => {
          let stdButtons = compiled.querySelectorAll('.share-buttons standard-button');
          let mailBtn = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'mail') mailBtn = true;
          });

          expect(mailBtn).toBeTrue();
        });

        it('must contain a print button', () => {
          let stdButtons = compiled.querySelectorAll('.share-buttons standard-button');
          let printBtn = false;

          stdButtons.forEach((tag) => {
            if (tag.getAttribute('button-name') === 'print') printBtn = true;
          });

          expect(printBtn).toBeTrue();
        });
      });
    });

    describe('Address bar', () => {
      it('must have space for address bar', () => {
        expect(compiled.querySelector('.address-bar')).toBeTruthy();
      });

      // TODO test address bar functionality
    });

    describe('main content space', () => {
      it('must exist', () => {
        expect(compiled.querySelector('.main-content')).toBeTruthy();
      });

      describe('Sidebar', () => {
        it('must exist', () => {
          expect(compiled.querySelector('.main-content .sidebar')).toBeTruthy();
        });

        // TODO ensure each section appears properly from standard button presses (and maybe toolbar button presses)
      });

      describe('Viewport', () => {
        it('must exist', () => {
          expect(compiled.querySelector('.main-content .viewport')).toBeTruthy();
        });

        // TODO check for about-me by default
      });

      describe('Status bar', () => {
        it('must exist', () => {
          expect(compiled.querySelector('.status-bar')).toBeTruthy();
        });

        describe('structure', () => {
          describe('status section', () => {
            it('must exist', () => {
              expect(compiled.querySelector('.status-bar .status')).toBeTruthy();
            });

            it('must have img space', () => {
              expect(compiled.querySelector('.status-bar .status img')).toBeTruthy();
            });

            it('must have text space', () => {
              expect(compiled.querySelector('.status-bar .status p')).toBeTruthy();
            });
          });

          describe('boxes', () => {
            it('must have two boxes', () => {
              let boxes = compiled.querySelectorAll('.status-bar .box');
              expect(boxes.length).toEqual(2);
            });
          });

          describe('connection section', () => {
            it('must exist', () => {
              expect(compiled.querySelector('.status-bar .connection')).toBeTruthy();
            });
          });
        });
      });
    });
  });
});
