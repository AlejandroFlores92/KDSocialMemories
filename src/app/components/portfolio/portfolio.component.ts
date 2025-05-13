import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItem } from '../../models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Social Media Campaign',
      description: 'A successful digital marketing campaign for a major brand',
      imageUrl: 'assets/portfolio/social-media.jpg',
      category: 'Social Media',
      link: '#'
    },
    {
      id: 2,
      title: 'Video Production',
      description: 'Cinematic product showcase video',
      imageUrl: 'assets/portfolio/video.jpg',
      category: 'Video',
      link: '#'
    },
    {
      id: 3,
      title: 'Content Strategy',
      description: 'Complete content strategy for an e-commerce platform',
      imageUrl: 'assets/portfolio/strategy.jpg',
      category: 'Strategy',
      link: '#'
    },
    {
      id: 4,
      title: 'Brand Photography',
      description: 'Professional photography for brand identity',
      imageUrl: 'assets/portfolio/photography.jpg',
      category: 'Photography',
      link: '#'
    }
  ];

  filteredItems: PortfolioItem[] = [];
  categories: string[] = ['All', 'Social Media', 'Video', 'Strategy', 'Photography'];
  selectedCategory: string = 'All';

  ngOnInit() {
    this.filteredItems = this.portfolioItems;
  }

  filterItems(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredItems = this.portfolioItems;
    } else {
      this.filteredItems = this.portfolioItems.filter(item => item.category === category);
    }
  }
}
