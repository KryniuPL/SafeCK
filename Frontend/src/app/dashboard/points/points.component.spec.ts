import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PointsComponent } from "./points.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PointsComponent", () => {

  let fixture: ComponentFixture<PointsComponent>;
  let component: PointsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PointsComponent]
    });

    fixture = TestBed.createComponent(PointsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
