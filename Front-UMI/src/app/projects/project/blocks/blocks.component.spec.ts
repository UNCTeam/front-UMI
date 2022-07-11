import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksComponent } from './blocks.component';

describe('ModelsComponent', () => {
  let component: BlocksComponent;
  let fixture: ComponentFixture<BlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});