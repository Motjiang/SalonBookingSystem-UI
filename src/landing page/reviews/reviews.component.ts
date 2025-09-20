import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  template: `
    <!-- Customer Reviews Section -->
    <div class="container px-4 py-5" id="reviews">
      <h2 class="pb-2 border-bottom text-center fw-bold">Customer Reviews</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
        <div class="col d-flex align-items-start border-end">
          <div
            class="bg-primary text-white fw-bold rounded-circle d-flex align-items-center justify-content-center me-3"
            style="width:60px; height:40px; border-radius:50%;"
          >
            MJ
          </div>
          <div>
            <h3 class="fw-bold mb-0 fs-5">Maria Jacobs</h3>
            <p class="mb-0">
              “Best salon in Pretoria! Friendly staff and amazing results every
              time.”
            </p>
          </div>
        </div>

        <div class="col d-flex align-items-start border-end">
          <div
            class="bg-success text-white fw-bold rounded-circle d-flex align-items-center justify-content-center me-3"
            style="width:60px; height:40px; border-radius:50%;"
          >
            TK
          </div>
          <div>
            <h3 class="fw-bold mb-0 fs-5">Thabo Khumalo</h3>
            <p class="mb-0">
              “Professional service and relaxing atmosphere. Highly recommend
              Salon88.”
            </p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div
            class="bg-secondary text-white fw-bold rounded-circle d-flex align-items-center justify-content-center me-3"
            style="width:60px; height:40px; border-radius:50%;"
          >
            LN
          </div>
          <div>
            <h3 class="fw-bold mb-0 fs-5">Lerato Nkosi</h3>
            <p class="mb-0">
              “Loved my bridal makeup! The team made my day so special.”
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {}
