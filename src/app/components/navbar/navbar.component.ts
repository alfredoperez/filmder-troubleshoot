import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
  }

  searchFilm(txtSearch: string) {
    txtSearch = txtSearch.trim();

    if (txtSearch.length === 0) {
      return;
    }
    this.router.navigate(['/search', txtSearch]);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
