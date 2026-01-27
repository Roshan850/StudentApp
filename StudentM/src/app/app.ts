import { Component, signal } from '@angular/core';
import { Table } from './table/table';
import { ItemCard } from './item-card/item-card';
import { Nav } from './navigation-bar/nav/nav';
import { Login } from './loginForm/login/login';
import { Register } from './registration/register/register';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Table,ItemCard,Nav,Login,Register,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudentM');
}
