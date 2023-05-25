import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

}
class Products {
  name: string;
  price: string;
  img: string;
  id: string;
  constructor(name: string, price: string, img: string,id:string) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.id=id
  }
  order(){
    localStorage.setItem("name"+this.id,this.name);
    localStorage.setItem("price"+this.id,this.price);
    localStorage.setItem("img"+this.id,this.img);
  }
  makeProduct(){
    if (container) {
      container.innerHTML = '<div class="product-card"><img src="'+this.img+'" alt=""><h3>'+this.name+'</h3><p>'+this.price+'</p><button class="order" onclick="order()">Order</button></div>';
    }
  }
}
const container = document.getElementById("container");
let product1 = new Products("White Sweter","100$","https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6adc4e3647d0465daa1eaf2c01041e69_9366/adicolor-classics-sst-track-pants.jpg","1")
product1.makeProduct()