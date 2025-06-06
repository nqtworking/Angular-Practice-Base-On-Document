import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildChildComponent } from './viewchild-child.component';

describe('ViewchildChildComponent', () => {
  let component: ViewchildChildComponent;
  let fixture: ComponentFixture<ViewchildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewchildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
