import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVueloComponent } from './add-vuelo.component';

describe('AddVueloComponent', () => {
  let component: AddVueloComponent;
  let fixture: ComponentFixture<AddVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
