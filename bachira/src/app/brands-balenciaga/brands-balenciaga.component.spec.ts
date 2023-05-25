import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsBalenciagaComponent } from './brands-balenciaga.component';

describe('BrandsBalenciagaComponent', () => {
  let component: BrandsBalenciagaComponent;
  let fixture: ComponentFixture<BrandsBalenciagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsBalenciagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsBalenciagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
