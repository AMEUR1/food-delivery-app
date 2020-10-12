import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../menu.service';
import { commandDataDb } from '../command/command.component';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-command-manage',
  templateUrl: './command-manage.component.html',
  styleUrls: ['./command-manage.component.css']
})
export class CommandManageComponent implements OnInit {

  
  displayedColumns: string[] = ['No', 'Address', 'Phone','Command','Actions'];

  allCommand 



  @ViewChild(MatPaginator) paginator: MatPaginator;
  

 

  constructor(private _menuSer : MenuService) { }

  ngOnInit() {
    
    this._menuSer.getAllCommand()
    .subscribe(
      res => {
            this.allCommand = new MatTableDataSource<commandDataDb>(res)
            this.allCommand.paginator = this.paginator;
            
          },
      err=> console.log(err)
    )
  }
  applyFilter(filterValue: string) {
    this.allCommand.filter = filterValue.trim().toLowerCase();
  }

}
