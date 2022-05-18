import {Component} from '@angular/core';
import {ISkill} from "../../../interface/skill.interface";
import {languages, skills, personalQualities, hobby, person} from "../../../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = person;
  skills: ISkill = skills;
  language: ISkill = languages;
  qualities: ISkill = personalQualities;
  hobby: ISkill = hobby;
}
