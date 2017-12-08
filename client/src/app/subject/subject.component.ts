import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject:Array<Object> = [];
  constructor(public subjectService:SubjectService) {
    this.subjectService.getSubjectList().subscribe( subjectList =>{
      this.subject = subjectList;
    });
    console.log("AQUI ESTOY")
    console.log(this.subject);
  }
  ngOnInit() {
  }


}
