import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

declare var M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  ngOnInit() {
    this.resetForm();
    this.getContactList();
  }

  resetForm(form?: NgForm) {
    if (form)
        form.reset();
        this.ContactService.selectedContact = {   
          _id: "",   
          photo: "",         
          firstName : "",
          lastName : "",
          email : "",
          mobileNumber : null,
          landlineNumber : null,
          notes : "",  
          createdOn: null,       
          viewCount : null
        }
  }

  onSubmit(form : NgForm) {
    if (form.value._id == "") {    
      this.ContactService.postContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getContactList();
        M.toast({html: 'Contact saved successfully', classes: 'rounded'});
      });
    } else {
      this.ContactService.putContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getContactList();
        M.toast({html: 'Contact updated successfully', classes: 'rounded'});
      });
    }
  }

  getContactList() {
    this.ContactService.getContactList().subscribe((res) => {
      this.ContactService.contact = res as Contact[];
    })
  }

  onEdit(con : Contact) {
    this.ContactService.selectedContact = con;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.ContactService.deleteContact(_id).subscribe((res) => {
        this.getContactList();
        this.resetForm(form);
        M.toast({html: 'Contact deleted successfully', classes: 'rounded'});
      })
    }
  }
}
