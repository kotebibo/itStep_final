import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPannelComponent } from './hero-pannel.component';

describe('HeroPannelComponent', () => {
  let component: HeroPannelComponent;
  let fixture: ComponentFixture<HeroPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
