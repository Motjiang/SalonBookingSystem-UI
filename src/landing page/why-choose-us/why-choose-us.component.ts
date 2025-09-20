import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  template: `
    <!-- Location Section -->
<div class="container px-4 py-5" id="location">
  <h2 class="pb-2 border-bottom text-center fw-bold">Our Location</h2>

  <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <!-- Location 1 -->
    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
           style="background-image: url('https://img.freepik.com/premium-photo/beauty-salon-interior-generative-ai_874904-16647.jpg'); background-size: cover; background-position: center;">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Salon88 – Main Branch</h3>
          <ul class="d-flex list-unstyled mt-auto">
            <li class="d-flex align-items-center me-3">
              <i class="bi bi-geo-alt-fill me-2"></i>
              <small>88 Main Road, Pretoria</small>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Location 2 -->
    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
           style="background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/95c51f152152317.6318c79dea723.jpg'); background-size: cover; background-position: center;">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Salon88 – Brooklyn</h3>
          <ul class="d-flex list-unstyled mt-auto">
            <li class="d-flex align-items-center me-3">
              <i class="bi bi-geo-alt-fill me-2"></i>
              <small>12 Brooklyn Mall, Pretoria</small>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Location 3 -->
    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
           style="background-image: url('https://im.whatshot.in/img/2023/Mar/istock-1216748727-1679370557.jpg'); background-size: cover; background-position: center;">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Salon88 – Hatfield</h3>
          <ul class="d-flex list-unstyled mt-auto">
            <li class="d-flex align-items-center me-3">
              <i class="bi bi-geo-alt-fill me-2"></i>
              <small>101 Hatfield Square, Pretoria</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {

}
