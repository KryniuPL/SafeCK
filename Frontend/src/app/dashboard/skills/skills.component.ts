import { Component, OnInit,Inject } from "@angular/core";
import { Skill } from "../../models/skill";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {
  MatTableDataSource
} from '@angular/material';

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})



export class SkillsComponent implements OnInit {

  ELEMENT_DATA: Skill[] = [
    {id: 1,name: 'Serwis Komputerowy'},
    {id: 2,name: 'Naprawa samochodów'},
    {id: 3,name: 'Prace Fizyczne'},
    {id: 4,name: 'Księgowość'},
    {id: 5,name: 'Malarstwo'},
  ];

  displayedColumns = ['id','name'];

  dataSource = this.ELEMENT_DATA;
  nameOfKSkill: string;

  constructor(public dialog: MatDialog) { 
    
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AddSkillComponent, {
      width: '550px',
      data: { skill: this.nameOfKSkill }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameOfKSkill = result;
      console.log(this.ELEMENT_DATA);
    });
  }

  ngOnInit() {

  }



}

@Component({
  selector: 'add-skill.html',
  templateUrl: 'add-skill.html',
})
export class AddSkillComponent{

  constructor(
    public dialogRef: MatDialogRef<AddSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
