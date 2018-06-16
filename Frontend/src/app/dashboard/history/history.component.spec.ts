import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HistoryComponent } from "./history.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HistoryComponent", () => {

  let fixture: ComponentFixture<HistoryComponent>;
  let component: HistoryComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HistoryComponent]
    });

    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
