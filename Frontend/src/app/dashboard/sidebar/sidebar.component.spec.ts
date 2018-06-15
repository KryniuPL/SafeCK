import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SidebarComponent } from "./sidebar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SidebarComponent", () => {

  let fixture: ComponentFixture<SidebarComponent>;
  let component: SidebarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SidebarComponent]
    });

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
