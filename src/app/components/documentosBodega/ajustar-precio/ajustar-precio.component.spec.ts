import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustarPrecioComponent } from './ajustar-precio.component';

describe('AjustarPrecioComponent', () => {
  let component: AjustarPrecioComponent;
  let fixture: ComponentFixture<AjustarPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustarPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustarPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
