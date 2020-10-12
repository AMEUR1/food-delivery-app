import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  foodCommandedByIndex:  Array<any>
  foodCommandedByName:  Array<any>

  private _addFoodUrl = "http://localhost:3000/admin/addFood";
  private _getFoodsUrl = "http://localhost:3000/admin/getFoods";
  private _addCommandUrl = "http://localhost:3000/admin/addCommand";
  private _getCommandsUrl = "http://localhost:3000/admin/getCommands";

  constructor(private _http : HttpClient) { }

  setFoodCommandedIndex(p){
    this.foodCommandedByIndex=p;
  }

  getFoodCommandedIndex(){
    return this.foodCommandedByIndex;
  }

  setFoodCommandedName(p){
    this.foodCommandedByName=p;
  }

  getFoodCommandedName(){
    return this.foodCommandedByName;
  }

  addNewFood(foodData){
   return this._http.post<any>(this._addFoodUrl,foodData)
  }

  getAllFood(){
    return this._http.get<any>(this._getFoodsUrl)
   }

   addNewCommand(CommandData){
    return this._http.post<any>(this._addCommandUrl,CommandData)
   }

   getAllCommand(){
    return this._http.get<any>(this._getCommandsUrl)
   }

}
