import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})

export class HistoryComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { 

  }

  ngOnInit() {

  }

  openAddDialog() {
    const dialogRef = this.dialog.open(MarkComponent, {
      height: '350px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDialog2() {
    const dialogRef = this.dialog.open(MarkComponent, {
      height: '350px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'mark',
  templateUrl: 'mark.html',
})
export class MarkComponent {

}