import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NavbarLoggedComponent } from "./navbar-logged.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NavbarLoggedComponent", () => {

  let fixture: ComponentFixture<NavbarLoggedComponent>;
  let component: NavbarLoggedComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NavbarLoggedComponent]
    });

    fixture = TestBed.createComponent(NavbarLoggedComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
