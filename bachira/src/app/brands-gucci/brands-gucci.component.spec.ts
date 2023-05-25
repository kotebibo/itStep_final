import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsGucciComponent } from './brands-gucci.component';

describe('BrandsGucciComponent', () => {
  let component: BrandsGucciComponent;
  let fixture: ComponentFixture<BrandsGucciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsGucciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsGucciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
