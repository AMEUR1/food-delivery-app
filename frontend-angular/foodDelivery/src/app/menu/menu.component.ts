
/*All Variable intial in subscribe cant be used in class*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  formCommand : FormGroup 
  myCommand : Array<any>
  allFood : Array<any>

  sizeFood : Number

  constructor(private formBuilder: FormBuilder,private _menuSer :MenuService,private _route : Router) { }

  ngOnInit() {

    this._menuSer.getAllFood()
    .subscribe(
      res =>{ 
        this.allFood=res
        this.sizeFood= res.length
        for (let index = 0; index < this.sizeFood; index++) {
          this.commandSizeAltr.push(this.formBuilder.control(0));
          this.commandedFood.push(this.formBuilder.group(
            {
              foodName: [''],
              foodQte : [0],
              foodPrice : [0]
            }
          ));
        }
        if(this._menuSer.getFoodCommandedIndex()){
          this.commandedFood.setValue(this._menuSer.getFoodCommandedName())
          this.commandSizeAltr.setValue(this._menuSer.getFoodCommandedIndex())
          
          }

      },
      err=> console.log(err)
    )

    this.formCommand= this.formBuilder.group({
      commandSize : [0],
      commandSizeAltr: this.formBuilder.array([]),
      commandedFood : this.formBuilder.array([])
    })
   
  }

  // I left commandSize to get total cmd
  addQte(indexCmd,selectedFood){
    console.log("try to show selected food")
    console.log(selectedFood)
    this.formCommand.patchValue({
      commandSize : this.commandSize.value+1
    })
    this.commandSizeAltr.get([indexCmd]).setValue(this.commandSizeAltr.get([indexCmd]).value+1)
    this.commandedFood.get([indexCmd]).get('foodQte').setValue(this.commandSizeAltr.get([indexCmd]).value)
    this.commandedFood.get([indexCmd]).get('foodName').setValue(selectedFood.foodName)
    this.commandedFood.get([indexCmd]).get('foodPrice').setValue(selectedFood.foodPrice)
    
  }

  removeQte(indexCmd,selectedFood){
    if(this.commandSizeAltr.get([indexCmd]).value!=0){
    this.formCommand.patchValue({
      commandSize : this.commandSize.value-1
    })
    this.commandSizeAltr.get([indexCmd]).setValue(this.commandSizeAltr.get([indexCmd]).value-1)}
    this.commandedFood.get([indexCmd]).get('foodQte').setValue(this.commandSizeAltr.get([indexCmd]).value)
    this.commandedFood.get([indexCmd]).get('foodName').setValue(selectedFood.foodName)
    this.commandedFood.get([indexCmd]).get('foodPrice').setValue(selectedFood.foodPrice)
  }
 
  get commandSize(){
    return this.formCommand.get('commandSize')
  }

  get commandSizeAltr(){
    return this.formCommand.get('commandSizeAltr') as FormArray;
  }

  get commandedFood(){
    return this.formCommand.get('commandedFood') as FormArray;
  }


  ConfirmCommand(){
      this._menuSer.setFoodCommandedName(this.commandedFood.getRawValue())
      this._menuSer.setFoodCommandedIndex(this.commandSizeAltr.getRawValue())
      this._route.navigate(['/command'])
      console.log("clickedConfir")
  }

}
