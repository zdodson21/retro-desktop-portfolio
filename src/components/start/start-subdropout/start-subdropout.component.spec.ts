import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSubdropoutComponent } from './start-subdropout.component';

describe('StartSubdropoutComponent', () => {
  let component: StartSubdropoutComponent;
  let fixture: ComponentFixture<StartSubdropoutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSubdropoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartSubdropoutComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container', () => {
    expect(compiled.querySelector('.container')).toBeTruthy();
  })

  it('should have subdropout wrapper', () => {
    expect(compiled.querySelector('.container .start-subdropout-wrapper')).toBeTruthy();
  })

  it('should have space for menu', () => {
    expect(compiled.querySelector('.container .menu-space')).toBeTruthy();
  })
});
