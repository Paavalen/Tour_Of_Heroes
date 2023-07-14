import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAbilitiesComponent } from './hero-abilities.component';

describe('HeroAbilitiesComponent', () => {
  let component: HeroAbilitiesComponent;
  let fixture: ComponentFixture<HeroAbilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroAbilitiesComponent]
    });
    fixture = TestBed.createComponent(HeroAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
