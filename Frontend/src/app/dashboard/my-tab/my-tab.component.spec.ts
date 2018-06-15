import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MyTabComponent } from "./my-tab.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("MyTabComponent", () => {

  let fixture: ComponentFixture<MyTabComponent>;
  let component: MyTabComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [MyTabComponent]
    });

    fixture = TestBed.createComponent(MyTabComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
