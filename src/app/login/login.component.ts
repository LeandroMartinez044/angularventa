import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.modalService;
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.show(template, { class: 'modal-sm' });
  }

}
