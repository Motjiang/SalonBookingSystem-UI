import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  template: `
   <!-- About Us Section -->
<div class="container my-5" id="about">
  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading fw-bold lh-1">
        About <span class="text-primary">SalonZero</span>
      </h2>
      <p class="lead mt-3">
        At <strong>SalonZero</strong>, we believe beauty is more than a look – it’s confidence, wellness, 
        and self-care. Our expert stylists, beauticians, and spa therapists are dedicated to helping 
        you look and feel your absolute best.  
      </p>
      <p class="lead">
        Whether you’re here for a fresh haircut, bridal makeup, or a relaxing spa treatment, 
        we combine passion, skill, and premium products to create a truly unforgettable experience.
      </p>
      <p>
        <a class="btn btn-primary btn-lg mt-2" href="#services">Explore Our Services &raquo;</a>
      </p>
    </div>

    <div class="col-md-5 d-one d-lg-block">
      <img src="https://cdn.pixabay.com/photo/2019/03/08/20/17/beauty-salon-4043096_1280.jpg" 
           class="featurette-image img-fluid mx-auto rounded shadow" 
           alt="About Salon88" 
           width="500" height="500" 
           style="object-fit: cover;">
    </div>
  </div>
</div>

  `,
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
