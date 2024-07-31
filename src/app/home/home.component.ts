import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customerImageList = [
    {
      "alt":"Luna Image",
      "url":"./asset/images/review/1.jpg",
      "message":"We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget. We would highly recommend them to anyone looking for a reliable partner.",
      "cust_name":"Luna John",
      "position": "UX Designer"
    },
    {
      "alt":"Mark Image",
      "url":"./asset/images/review/2.jpg",
      "message":"We were looking for a company that could help us develop a new website that was both visually appealing and user-friendly. We are so happy with the results, and we would highly recommend them to anyone looking for a new website.",
      "cust_name":"Mark Smith",
      "position": "Marketing Specialist"
    },
    {
      "alt":"Luke Image",
      "url":"./asset/images/review/3.jpg",
      "message":"We were looking for a company that could help us with our branding. We needed a website and marketing materials. They were able to create a brand identity that we loved. They worked with us to develop a logo that represented our company.",
      "cust_name":"Luke Reeves",
      "position": "Sales Manager"
    },
  ]
}
