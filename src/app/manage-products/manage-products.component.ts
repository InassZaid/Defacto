import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  id;
  name;
  type;
  description;
  selectedObj ={}
  //dataOfProduct =this.manageService.Product;
  constructor(private manageService :ManageService) { }
 data =[];
  ngOnInit() {

    
    this.manageService.getProduct().subscribe(pro => this.data=pro);
  }
 
   
 addProduct(){
    let obj={id:this.id,name:this.name,type:this.type,description:this.description}
  this.manageService.addNewProduct(obj).subscribe(res =>this.selectedObj = res )
 }


 delete(id){
 //this. id =this.manageService.getProductById;
    this.manageService.delet(id).subscribe(re=> console.log(re));
   
      }
/*

      addNew(addProduct){

      console.log(addProduct);
     
      
      
    }
    */
  }

  

