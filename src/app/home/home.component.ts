import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {

  }

  contact = [
    { icon: 'bi bi-phone', phone: 'Phone', number: '+91 9065106006' },
    { icon: 'bi bi-envelope-open', phone: 'Email', number: 'danishjamil000@gmail.com' },
    { icon: 'bi bi-geo-alt-fill', phone: 'Location', number: 'Hyderabad' },
    { icon: 'bi bi-calendar2-day', phone: 'Birthday', number: 'Nov 04, 2001' },
  ]

  experiance = [
    { img: 'assets/images/icons/1.svg', name: 'Ui/Ux Design', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' },
    { img: 'assets/images/icons/2.svg', name: 'Ui/Ux Design', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' },
    { img: 'assets/images/icons/3.svg', name: 'Ui/Ux Design', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' },
    { img: 'assets/images/icons/1.svg', name: 'Ui/Ux Design', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' }
  ]
  icons = [
    {name:'bi bi-facebook', color:'#1877F2'},
    {name:'bi bi-instagram', color:'#cd486b'},
    {name:'bi bi-linkedin', color:'#0072b1'},
    {name:'bi bi-twitter', color:'#1877F2'},
    {name:'bi bi-github', color:'#fff'},
  ]
}
