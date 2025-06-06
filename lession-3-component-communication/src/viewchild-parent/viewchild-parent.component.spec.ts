import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildParentComponent } from './viewchild-parent.component';

describe('ViewchildParentComponent', () => {
  let component: ViewchildParentComponent;
  let fixture: ComponentFixture<ViewchildParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewchildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
