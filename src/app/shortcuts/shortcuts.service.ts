import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ShortcutsService {

  url = "http://localhost:3000/api/shortcuts"

  constructor(private http: HttpClient) {
  }

  getShortcuts(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }

  getIcon(shortcut: string): string[] {

    switch (shortcut) {

    }

    return null;
  }

}
