import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amarok } from './amarok';

describe('Amarok', () => {
  let component: Amarok;
  let fixture: ComponentFixture<Amarok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Amarok]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Amarok);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
