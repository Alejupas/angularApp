import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllitemsComponent } from './allitems.component';

describe('AllitemsComponent', () => {
  let component: AllitemsComponent;
  let fixture: ComponentFixture<AllitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'All items'`, () => {
    fixture = TestBed.createComponent(AllitemsComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('All items');
  })
});
