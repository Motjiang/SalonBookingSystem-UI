import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { ServicesComponent } from "../services/services.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { WhyChooseUsComponent } from "../why-choose-us/why-choose-us.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { NewsLetterComponent } from "../news-letter/news-letter.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, ServicesComponent, AboutUsComponent, WhyChooseUsComponent, ReviewsComponent, NewsLetterComponent, FooterComponent],
  template: `
  <div class="container">
    <app-navbar/>
    <app-header/>
    <app-services/>
    <app-about-us/>
    <app-why-choose-us/>
    <app-news-letter/>
    <app-reviews/>
    <app-footer/>
  </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
