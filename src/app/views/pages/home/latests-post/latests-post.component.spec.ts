import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestsPostComponent } from './latests-post.component';

describe('LatestsPostComponent', () => {
  let component: LatestsPostComponent;
  let fixture: ComponentFixture<LatestsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
