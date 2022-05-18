import {Component, Input, OnInit} from '@angular/core';
import {ISkill} from "../../../interface/skill.interface";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input()
  testData: ISkill;

  constructor() {
  }

  ngOnInit(): void {
  }

}
