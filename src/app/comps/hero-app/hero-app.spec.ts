import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroApp } from './hero-app';

describe('HeroApp', () => {
  let component: HeroApp;
  let fixture: ComponentFixture<HeroApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
