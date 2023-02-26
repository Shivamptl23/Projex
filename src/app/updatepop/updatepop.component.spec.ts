import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepopComponent } from './updatepop.component';

describe('UpdatepopComponent', () => {
  let component: UpdatepopComponent;
  let fixture: ComponentFixture<UpdatepopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
