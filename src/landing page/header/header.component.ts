import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
<img src="https://global-uploads.webflow.com/5e3cf9ae96c8dfcfd69fa2f9/651c6eedb618931a04f0e21a_Holly%20Gunn.jpg" class="d-block w-100" alt="Beauty Treatments">
<div class="container">              <div class="carousel-caption text-start">
              <h1 class="text-info">Welcome to SalonZero</h1>
              <p class="opacity-30 text-dark">Your one-stop destination for beauty, wellness, and relaxation.</p>
              <p>
                <a class="btn btn-lg btn-primary" href="#booking">Book Your Appointment &raquo;</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <img src="https://static.wixstatic.com/media/1a8940_774301dde60f43b09f24d69b3a865b70~mv2.jpg/v1/fill/w_958,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a8940_774301dde60f43b09f24d69b3a865b70~mv2.jpg" class="d-block w-100" alt="Beauty Treatments">
<div class="container">          <div class="carousel-caption">
              <h1 class="text-info">Professional Stylists</h1>
              <p class="opacity-30 text-dark">Get a fresh look with our expert hairstyling and grooming services.</p>
              <p>
                <a class="btn btn-lg btn-primary" href="#services">Explore Services &raquo;</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <img src="https://usatales.com/wp-content/uploads/2021/02/shutterstock_232040587.jpg" class="d-block w-100" alt="Beauty Treatments">
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>Relax & Rejuvenate</h1>
              <p class="opacity-30 text-dark">Enjoy spa treatments, facials, and premium skincare solutions.</p>
              <p>
                <a class="btn btn-lg btn-primary" href="#gallery">View Gallery &raquo;</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
