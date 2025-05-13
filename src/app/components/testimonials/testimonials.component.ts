import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials" id="testimonials">
      <div class="container">
        <h2>Client Testimonials</h2>
        <p class="section-description">What others say about working with me</p>
        
        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let testimonial of testimonials">
            <div class="testimonial-content">
              <p>{{testimonial.content}}</p>
            </div>
            <div class="testimonial-author">
              <img [src]="testimonial.image" [alt]="testimonial.name">
              <div class="author-info">
                <h4>{{testimonial.name}}</h4>
                <p>{{testimonial.position}}</p>
                <p class="company">{{testimonial.company}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      padding: 6rem 0;
      background: #f8f9fa;

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      h2 {
        text-align: center;
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 1rem;
      }

      .section-description {
        text-align: center;
        color: #666;
        margin-bottom: 4rem;
        font-size: 1.2rem;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .testimonial-card {
        background: white;
        border-radius: 10px;
        padding: 2rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        .testimonial-content {
          margin-bottom: 2rem;
          color: #555;
          font-size: 1.1rem;
          line-height: 1.6;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;

          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
          }

          .author-info {
            h4 {
              margin: 0;
              color: #333;
              font-size: 1.1rem;
            }

            p {
              margin: 0.2rem 0;
              color: #666;
              font-size: 0.9rem;

              &.company {
                color: #007bff;
                font-weight: 500;
              }
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      .testimonials {
        padding: 4rem 0;

        h2 {
          font-size: 2rem;
        }

        .testimonials-grid {
          grid-template-columns: 1fr;
        }
      }
    }
  `]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'Tech Solutions Inc.',
      content: 'Working with this content creator has been a game-changer for our brand. The quality and creativity of the content exceeded our expectations.',
      image: 'assets/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      position: 'CEO',
      company: 'StartUp Hub',
      content: 'The attention to detail and understanding of our brand voice was impressive. Our social media engagement has increased significantly.',
      image: 'assets/testimonials/mike.jpg'
    },
    {
      id: 3,
      name: 'Emma Davis',
      position: 'Brand Manager',
      company: 'Creative Studios',
      content: 'Consistently delivers high-quality content that resonates with our audience. A true professional who meets deadlines and communicates effectively.',
      image: 'assets/testimonials/emma.jpg'
    }
  ];
}
