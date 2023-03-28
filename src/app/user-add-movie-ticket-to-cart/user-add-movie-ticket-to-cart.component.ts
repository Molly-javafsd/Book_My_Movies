import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartClass } from '../CartClass';
import { MovieTicketClass } from '../MovieTicketClass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-add-movie-ticket-to-cart',
  templateUrl: './user-add-movie-ticket-to-cart.component.html',
  styleUrls: ['./user-add-movie-ticket-to-cart.component.css']
})
export class UserAddMovieTicketToCartComponent implements OnInit {
carts:any;
id:any;
cart:CartClass=new CartClass();
movie:MovieTicketClass=new MovieTicketClass();


  ngOnInit(): void {
    let id=this.service.movieIdForCart;
let resp1=this.service.getMovieById(id);
resp1.subscribe((data:any)=>this.movie=data)
  }



  constructor(private service: ServiceService,private router: Router) {}

  proceed(){
    this.cart.movie=this.movie;

    this.router.navigate(['/user-list-of-all-movies']);
  }
}
