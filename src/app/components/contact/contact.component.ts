import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <h2>Get in Touch</h2>
        <p class="section-description">Let's discuss your next project</p>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>hello&#64;contentcreator.com</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-location-dot"></i>
              <div>
                <h3>Location</h3>
                <p>Los Angeles, CA</p>
              </div>
            </div>
            <div class="social-links">
              <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
          </div>

          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                [(ngModel)]="formData.name" 
                name="name" 
                required>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                [(ngModel)]="formData.email" 
                name="email" 
                required>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                [(ngModel)]="formData.subject" 
                name="subject" 
                required>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                [(ngModel)]="formData.message" 
                name="message" 
                required 
                rows="5"></textarea>
            </div>

            <button type="submit" [disabled]="submitting">
              {{ submitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 0;
      background: white;

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

      .contact-content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 4rem;
      }

      .contact-info {
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;

          i {
            font-size: 1.5rem;
            color: #007bff;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 123, 255, 0.1);
            border-radius: 50%;
          }

          h3 {
            margin: 0;
            font-size: 1.2rem;
            color: #333;
          }

          p {
            margin: 0.5rem 0 0;
            color: #666;
          }
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;

          a {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #007bff;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
              background: #0056b3;
              transform: translateY(-2px);
            }
          }
        }
      }

      .contact-form {
        .form-group {
          margin-bottom: 1.5rem;

          label {
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
            font-weight: 500;
          }

          input, textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            transition: border-color 0.3s ease;

            &:focus {
              outline: none;
              border-color: #007bff;
            }
          }
        }

        button {
          width: 100%;
          padding: 1rem;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover:not(:disabled) {
            background: #0056b3;
          }

          &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .contact {
        padding: 4rem 0;

        h2 {
          font-size: 2rem;
        }

        .contact-content {
          grid-template-columns: 1fr;
        }
      }
    }
  `]
})
export class ContactComponent {
  submitting = false;
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.submitting) return;
    
    this.submitting = true;
    // Here you would typically make an API call to submit the form
    console.log('Form submitted:', this.formData);
    
    // Simulate API call
    setTimeout(() => {
      this.submitting = false;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      alert('Thank you for your message! I will get back to you soon.');
    }, 1500);
  }
}
