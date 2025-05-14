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
        <h2>Contacto</h2>
        <p class="section-description">¡Hablemos de tu próximo proyecto!</p>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>kdsocialmemories&#64;gmail.com</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Teléfono</h3>
                <p>+52 (813) 259-9375</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-location-dot"></i>
              <div>
                <h3>Ubicación</h3>
                <p>Monterrey, MX</p>
              </div>
            </div>
            <div class="social-links">
              <a href="https://www.instagram.com/kdsocialmemories/" target="" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@kdsocialmemories" target="" aria-label="Tik-Tok"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>

          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">Nombre</label>
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
              <label for="subject">Asunto</label>
              <input 
                type="text" 
                id="subject" 
                [(ngModel)]="formData.subject" 
                name="subject" 
                required>
            </div>

            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea 
                id="message" 
                [(ngModel)]="formData.message" 
                name="message" 
                required 
                rows="5"></textarea>
            </div>

            <button type="submit" [disabled]="submitting">
              {{ submitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 0;
      background: var(--white-color);

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      h2 {
        text-align: center;
        font-size: 2.5rem;
        color: var(--text-color);
        margin-bottom: 1rem;
      }

      .section-description {
        text-align: center;
        color: var(--primary-color);
        margin-bottom: 4rem;
        font-size: 1.2rem;
      }

      .contact-content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 4rem;
        background: var(--secondary-color);
        border-radius: 15px;
        padding: 3rem;
        box-shadow: 0 5px 15px rgba(100, 94, 90, 0.1);
      }

      .contact-info {
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;

          i {
            font-size: 1.5rem;
            color: var(--primary-color);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--white-color);
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          h3 {
            margin: 0;
            font-size: 1.2rem;
            color: var(--text-color);
          }

          p {
            margin: 0.5rem 0 0;
            color: var(--primary-color);
          }

          &:hover i {
            background: var(--primary-color);
            color: var(--white-color);
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
            background: var(--white-color);
            color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 2px solid transparent;

            &:hover {
              background: var(--primary-color);
              color: var(--white-color);
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
            color: var(--text-color);
            font-weight: 500;
          }

          input, textarea {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid transparent;
            border-radius: 4px;
            font-size: 1rem;
            background: var(--white-color);
            transition: all 0.3s ease;

            &:focus {
              outline: none;
              border-color: var(--primary-color);
              box-shadow: 0 0 0 2px rgba(100, 94, 90, 0.1);
            }
          }

          textarea {
            resize: vertical;
          }
        }

        button {
          width: 100%;
          padding: 1rem;
          background: var(--primary-color);
          color: var(--white-color);
          border: 2px solid var(--primary-color);
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover:not(:disabled) {
            background: transparent;
            color: var(--primary-color);
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
          padding: 2rem;
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
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    }, 1500);
  }
}
