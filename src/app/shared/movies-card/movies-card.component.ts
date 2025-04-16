import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent {
  @Input() movie: any;
  @Input() isNew:boolean = false;
  // @Input() isAdmin: boolean = false;
  @Input() isAdmin: boolean = true;

  constructor(private router: Router , private authService: AuthService) {}

  // ngOnInit(): void {
  //   this.isAdmin = this.authService.getRole() === 'ADMIN';
  // }

  addMovie() {
    console.log('Adding movie:', this.movie.imdbId);
    // call add movie service if needed
    this.movie.isAdded = true;
  }

  removeMovie() {
    console.log('Removing movie:', this.movie.imdbId);
    // call remove movie service if needed
    this.movie.isAdded = false;
  }

  viewDetails() {
    this.router.navigate(['/movies', this.movie.imdbId]);
  }
}
