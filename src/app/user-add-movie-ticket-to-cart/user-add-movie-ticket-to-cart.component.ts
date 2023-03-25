import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartClass } from '../CartClass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-add-movie-ticket-to-cart',
  templateUrl: './user-add-movie-ticket-to-cart.component.html',
  styleUrls: ['./user-add-movie-ticket-to-cart.component.css']
})
export class UserAddMovieTicketToCartComponent implements OnInit {
carts:any;
cart:CartClass=new CartClass();
  ngOnInit(): void {
    let response=this.service.getAllMovieTicketsInCart();
    response.subscribe((data:any)=>this.carts=data);
  }

  constructor(private service: ServiceService,private router: Router) {}

  addMovieTicketToCart(){
    let response=this.service.addMovieTicketToCart(this.cart);
    response.subscribe((data:any)=>this.carts=data);
    
    this.router.navigate(['/user-list-of-all-movies']);
  }
}