import { Component, OnInit } from '@angular/core';
import {education} from "../../../data";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: any = education;

  constructor() { }

  ngOnInit(): void {
  }

}
