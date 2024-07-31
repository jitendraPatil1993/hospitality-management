import { Component } from '@angular/core';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.css'
})
export class RoomPageComponent {
  cardList: any[] = [ 
    {    
    "url": './asset/images/card_image/1.jpg',
    "alt" : "Card image",
    "resort_name": "Deluxe Black Room",
    "info": "A spacious deluxe room which has a double bed and a single bed. Ideal for any...",
    "price": "$20.00"
 },
 {   
    "url": './asset/images/card_image/2.jpg',
    "alt" : "Card image",
    "resort_name": "Studio Broadway Room",
    "info": "Classic Rooms in the our Hotel have been refurbished to a very high standard....",
    "price": "$18.00"
 },
 {
  "ID": "2",
  "url": './asset/images/card_image/3.jpg',
  "resort_name": "Standart Economic Single Room",
  "info": "Economy Single Room is well-furnished guest rooms 11 square meters with the m...",
  "price": "$24.00"
} ,
{
  "ID": "2",
  "url": './asset/images/card_image/4.jpg',
  "resort_name": "Standart Double Room",
  "info": "Furnished in classic and essential style, these comfortable rooms have balcon...",
  "price": "$27.00"
} ,
{
  "ID": "2",
  "url": './asset/images/card_image/5.jpg',
  "resort_name": "Standart One Person Room",
  "info": "The classic room is equipped with desk and chair, 2 single beds, TV and plent...  ",
  "price": "$40.00"
} ,
{
  "ID": "2",
  "url": './asset/images/card_image/6.jpg',
  "resort_name": "Standart Economic Double Room",
  "info": "Our Economy room has everything you might need to relax, at the best rate pos...",
  "price": "$33.00"
}  ];
}
