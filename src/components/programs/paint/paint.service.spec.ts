import { TestBed } from '@angular/core/testing';
import { PaintService } from './paint.service';

describe('PaintService', () => {
  let service: PaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Color rows', () => {
    it('should have proper top colors', () => {
      const TOP_COLOR_ROW: Array<string> = [
        '#000000',
        '#808080',
        '#800000',
        '#808000',
        '#008000',
        '#008080',
        '#000080',
        '#800080',
        '#808040',
        '#004040',
        '#0080FF',
        '#004080',
        '#4000FF',
        '#804000',
      ];

      expect(service.topColorRow).toEqual(TOP_COLOR_ROW);
    });

    it('should have proper bottom row colors', () => {
      const BOTTOM_COLOR_ROW: Array<string> = [
        '#FFFFFF',
        '#C0C0C0',
        '#FF0000',
        '#FFFF00',
        '#00FF00',
        '#00FFFF',
        '#0000FF',
        '#FF00FF',
        '#FFFF80',
        '#00FF80',
        '#80FFFF',
        '#8080FF',
        '#FF0080',
        '#FF8040',
      ];

      expect(service.bottomColorRow).toEqual(BOTTOM_COLOR_ROW);
    });
  });

  describe('Default', () => {
    it('primary color should be black', () => {
      expect(service.primaryColor()).toBe('#000000');
    });

    it('secondary color should be white', () => {
      expect(service.secondaryColor()).toBe('#FFFFFF');
    });

    it('selected tool should be "pencil"', () => {
      expect(service.currTool).toBe('pencil');
    });
  });
});
