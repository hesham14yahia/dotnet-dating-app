import { Component, inject, OnInit } from '@angular/core';
import { Nav } from '../layout/nav/nav';
import { Router, RouterOutlet } from '@angular/router';
import { Toast } from '../shared/toast/toast';

@Component({
    selector: 'app-root',
    imports: [Nav, RouterOutlet, Toast],
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
    protected router = inject(Router);
}
