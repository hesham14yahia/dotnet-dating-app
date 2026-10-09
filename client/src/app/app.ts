import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from '../layout/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = "Dating App";
  protected url = "https://localhost:5001";
  protected members = signal<any>([]);

  ngOnInit(): void {
    let api = this.url + '/api/members';
    this.http.get(api)
        .subscribe({
          next: response => this.members.set(response),
          error: error => console.log(error),
          complete: () => console.log("Completed")
        })
  }
}
