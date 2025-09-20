import { Component } from '@angular/core';

@Component({
  selector: 'app-news-letter',
  standalone: true,
  imports: [],
  template: `
    <div class="container py-5 my-5 text-center bg-light rounded-3 shadow-sm">
      <h2 class="fw-bold mb-3">Subscribe to Our Newsletter</h2>
      <p class="text-muted mb-4">
        Get the latest updates on offers, new services, and beauty tips directly
        to your inbox.
      </p>

      <form class="row g-2 justify-content-center">
        <div class="col-sm-6 col-md-4">
          <input
            type="email"
            class="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary px-4">Subscribe &raquo;</button>
        </div>
      </form>
    </div>
  `,
  styleUrl: './news-letter.component.css',
})
export class NewsLetterComponent {}
