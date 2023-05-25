import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsAdidasComponent } from './brands-adidas.component';

describe('BrandsAdidasComponent', () => {
  let component: BrandsAdidasComponent;
  let fixture: ComponentFixture<BrandsAdidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsAdidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsAdidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
