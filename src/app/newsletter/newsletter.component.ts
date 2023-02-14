import { Component } from '@angular/core';
import { NewsletterService } from '../newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  
  status : any;
  constructor(private subscription : NewsletterService){}

  onSubmit(subscriptionForm:any){

    this.subscription.subscribe(subscriptionForm.value).subscribe((response:any)=>{
       console.log(response);
       this.status = response.message;
    })
    console.log(subscriptionForm.value);
    subscriptionForm.reset();
    
  }
}
