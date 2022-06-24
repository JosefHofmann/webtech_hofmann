import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopularEntriesService } from 'src/app/services/popular-entries.service';
import { Observable } from 'rxjs';
import { Entry } from 'src/app/models/entries';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})

export class PopularListComponent implements OnInit {
  
  popularEntries: Entry[] = [];

  constructor(public service: PopularEntriesService, private router: Router) { }

  ngOnInit(): void {
    this.getPopularEntries();

    // füge alle details Elemente einer Liste hinzu
    const details = document.querySelectorAll("details");

    // schließe alle details Elemente, wenn ein details Element geöffnet wird.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }

  getPopularEntries() {
    this.service.getEntries().subscribe((resp: any) => {
      this.popularEntries = resp;
      console.log(this.popularEntries);
    });
  }
  
}
