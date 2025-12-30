import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsNeeded } from './docs-needed';

describe('DocsNeeded', () => {
  let component: DocsNeeded;
  let fixture: ComponentFixture<DocsNeeded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsNeeded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsNeeded);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
