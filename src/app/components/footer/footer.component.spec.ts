import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should return 4 lefty a tags', ()=> {
    const footerLinks = document.querySelectorAll('.footer-col .lefty a');
  expect(footerLinks.length).toBe(4);
})

  it('should return 4 righty a tags', ()=> {
    const footerLinks = document.querySelectorAll('.footer-col .righty a');
  expect(footerLinks.length).toBe(4);
})
});
