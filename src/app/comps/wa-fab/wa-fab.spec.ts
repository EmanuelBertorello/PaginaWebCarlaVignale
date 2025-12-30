import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaFab } from './wa-fab';

describe('WaFab', () => {
  let component: WaFab;
  let fixture: ComponentFixture<WaFab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaFab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaFab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
