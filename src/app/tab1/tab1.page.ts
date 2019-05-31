import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  films: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }
 
  ngOnInit() {
    this.films = this.http.get('https://swapi.co/api/films');
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/tab1/${filmId}`);
  }

}
