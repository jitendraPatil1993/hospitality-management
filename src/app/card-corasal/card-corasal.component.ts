import { Component } from '@angular/core';

@Component({
  selector: 'app-card-corasal',
  templateUrl: './card-corasal.component.html',
  styleUrl: './card-corasal.component.css'
})
export class CardCorasalComponent {
  cardList: any[] = [ 
    {    
    "url": './asset/images/card_image/1.jpg',
    "alt" : "Card image"
 },
 {   
    "url": './asset/images/card_image/2.jpg',
    "alt" : "Card image"
 },
 {
  "ID": "2",
  "url": './asset/images/card_image/3.jpg'
} ,
{
  "ID": "2",
  "url": './asset/images/card_image/4.jpg'
} ,
{
  "ID": "2",
  "url": './asset/images/card_image/5.jpg'
} ,
{
  "ID": "2",
  "url": './asset/images/card_image/6.jpg'
}  ];
}
