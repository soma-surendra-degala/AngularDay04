import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatedrive } from './templatedrive';

describe('Templatedrive', () => {
  let component: Templatedrive;
  let fixture: ComponentFixture<Templatedrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templatedrive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templatedrive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
