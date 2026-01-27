import { Component, signal } from '@angular/core';
import { Table } from './table/table';


@Component({
  selector: 'app-root',
  imports: [Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudentM');
}
