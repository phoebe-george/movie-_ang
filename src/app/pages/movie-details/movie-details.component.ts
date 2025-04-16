import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private MService: MovieService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.MService.GetMovieByID(Number(id)).subscribe((data) => {
        this.movie = data[0];
      });
    }
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  //   if (id) {
  //     this.MService.GetMovieByID(Number(id)).subscribe(data => {
  //       this.movie = data;
  //       this.movie = {
  //         imdbId: 2,
  //         movieName: "The Dark Knight",
  //         type: "action",
  //         releaseYear: "2008",
  //         poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  //         rate: "5"
  //       };
  //     });
  //   }
  // }
}