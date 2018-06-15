import { Component, OnInit } from "@angular/core";
import { Skill } from "../../models/skill";


@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})



export class SkillsComponent implements OnInit {
  
  displayedColumns = ['id','name'];
  dataSource =  ELEMENT_DATA;

  constructor() { 

  }

  ngOnInit() {

  }
}

const ELEMENT_DATA: Skill[] = [
  {id: 1,name: 'Serwis Komputerowy'},
  {id: 2,name: 'Naprawa samochodów'},
  {id: 3,name: 'Prace Fizyczne'},
  {id: 4,name: 'Księgowość'},
  {id: 5,name: 'Malarstwo'},
];