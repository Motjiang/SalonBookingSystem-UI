import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
   <!-- Services Section -->
<div class="container marketing my-5" id="services">
  <h2 class="text-center mb-5 fw-bold">Our Services</h2>

  <div class="row text-center">
    <!-- Service 1 -->
    <div class="col-lg-4">
      <img src="https://tse2.mm.bing.net/th/id/OIP.LKpSycMPVuTqv6oiKVUjEAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" class="bd-placeholder-img rounded-circle mb-3" alt="Hair Styling"
           width="140" height="140" style="object-fit: cover;">
      <h3 class="fw-normal">Hair Styling</h3>
      <p>Trendy cuts, coloring, and professional styling to give you the perfect look.</p>
      <p><a class="btn btn-secondary" href="#booking">Book Now &raquo;</a></p>
    </div>

    <!-- Service 2 -->
    <div class="col-lg-4">
      <img src="https://t4.ftcdn.net/jpg/02/44/16/37/360_F_244163733_ErNyvrHfOJcRlHd7t3doQcs4bEgclAfq.jpg" class="bd-placeholder-img rounded-circle mb-3" alt="Beauty & Makeup"
           width="140" height="140" style="object-fit: cover;">
      <h3 class="fw-normal">Beauty & Makeup</h3>
      <p>From casual to bridal looks, our makeup artists bring out your natural beauty.</p>
      <p><a class="btn btn-secondary" href="#booking">Book Now &raquo;</a></p>
    </div>

    <!-- Service 3 -->
    <div class="col-lg-4">
      <img src="https://th.bing.com/th/id/R.18e570f812b322677f7777e0a1e8a175?rik=2yaoLbWLZo1h8w&pid=ImgRaw&r=0" class="bd-placeholder-img rounded-circle mb-3" alt="Spa & Wellness"
           width="140" height="140" style="object-fit: cover;">
      <h3 class="fw-normal">Spa & Wellness</h3>
      <p>Relax and rejuvenate with facials, massages, and premium skincare treatments.</p>
      <p><a class="btn btn-secondary" href="#booking">Book Now &raquo;</a></p>
    </div>
  </div>
</div>

  `,
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
