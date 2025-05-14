import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItem } from '../../models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Ceremonia de Boda',
      description: 'Momentos mágicos en video',
      type: 'video',
      mediaUrl: 'assets/videos/8776123-uhd_3840_2160_25fps.mp4',
      thumbnailUrl: 'assets/images/boda1.jpg',
      category: 'Bodas'
    },
    {
      id: 2,
      title: 'Celebración Romántica',
      description: 'Historia de amor en movimiento',
      type: 'video',
      mediaUrl: 'assets/videos/8776998-uhd_2160_3840_25fps.mp4',
      thumbnailUrl: 'assets/images/boda2.jpg',
      category: 'Bodas'
    },
    {
      id: 3,
      title: 'Momentos Únicos',
      description: 'Historias de amor en imágenes',
      type: 'image',
      mediaUrl: 'assets/images/boda3.jpg',
      category: 'Bodas'
    },
    {
      id: 4,
      title: 'El Gran Día',
      description: 'Memorias que durarán toda la vida',
      type: 'image',
      mediaUrl: 'assets/images/boda4.jpg',
      category: 'Bodas'
    }
  ];

  filteredItems: PortfolioItem[] = [];
  categories: string[] = ['Todos', 'Bodas', 'Eventos', 'Sesiones'];
  selectedCategory: string = 'Todos';

  ngOnInit() {
    this.filteredItems = this.portfolioItems;
  }

  ngAfterViewInit() {
    this.setupVideoObservers();
  }

  private setupVideoObservers() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            console.log('Video playback failed');
          });
        } else {
          video.pause();
        }
      });
    }, options);

    // Observe all videos
    setTimeout(() => {
      const videos = document.querySelectorAll('.portfolio-item video');
      videos.forEach(video => observer.observe(video));
    }, 100);
  }

  filterItems(category: string) {
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.filteredItems = this.portfolioItems;
    } else {
      this.filteredItems = this.portfolioItems.filter(item => item.category === category);
    }
    // Re-setup observers after filtering
    setTimeout(() => this.setupVideoObservers(), 100);
  }
}
