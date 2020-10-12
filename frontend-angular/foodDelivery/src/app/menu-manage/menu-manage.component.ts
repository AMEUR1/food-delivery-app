//For Upload img i use just a folder already exist in projets , on upload we get just the name

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface FoodInfo {
  foodName: string;
  foodPrice: number;
  foodImgPath: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-menu-manage',
  templateUrl: './menu-manage.component.html',
  styleUrls: ['./menu-manage.component.css']
})
export class MenuManageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'imagePath'];
  dataSource = ELEMENT_DATA;
  allFood : FoodInfo[]

  menuForm : FormGroup
  foodData : FoodInfo

  imgToDisplay : String 

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  constructor(private formBuilder : FormBuilder,private _menuSer : MenuService,private _route: Router ) { }

  ngOnInit() {
    this._menuSer.getAllFood()
    .subscribe(
      res => this.allFood=res,
      err=> console.log(err)
    )

    this.menuForm = new FormGroup({
      foodName : new FormControl('',[
        Validators.required,
        Validators.maxLength(20)
      ]),
    

    
      foodPrice : new FormControl('',[
        Validators.required,
        Validators.pattern("^[0-9]*$")
    
      ]),

      foodImgPath : new FormControl('',[
        Validators.required
      ]),
   });
  }

  get foodName(){
    return this.menuForm.get('foodName')
  }

  get foodImgPath(){
    return this.menuForm.get('foodImgPath')
  }

  get foodPrice(){
    return this.menuForm.get('foodPrice')
  }

  onSubmit(){
   
    let size = this.foodImgPath.value.split('\\').length
    let name : string = this.foodImgPath.value.split('\\')[size-1]
    this.foodData= this.menuForm.getRawValue()
    this.foodData.foodImgPath = "../../assets/imgFood/"+name
    console.log(this.foodData)

    this._menuSer.addNewFood(this.foodData)
    .subscribe(
      res => {
        console.log("Succes Add "+ res)
        this._route.navigate(['/admin-menu'])
        this.menuForm.patchValue(
          {
            foodName : "",
            foodPrice : "",
            foodImgPath : ""
          }
        )
        this.foodName.setErrors({
          'incorrect': false,
          'touched' : false
        })
        this.foodPrice.setErrors({
          'incorrect': false,
          'touched' : false
        })
        
        this._menuSer.getAllFood()
        .subscribe(
          res => this.allFood=res,
          err=> console.log(err)
        )
       // this.menuForm.reset()
        
       },
      err => {
      console.log("Failed Login ")
      console.log(err)
      
    }
    )
  }

  displayImg(Link){
      this.imgToDisplay= Link
  }
  

}
