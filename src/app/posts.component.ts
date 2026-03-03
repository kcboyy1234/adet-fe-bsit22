import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts = signal([
    {
      title: 'Doniel',
      description: '1.'
    },
    {
      title: 'Eunson',
      description: '2.'
    },
    {
      title: 'Ko',
      description: '3.'
    }
  ])

  deletePost(index: number) {
    this.posts().splice(index, 1);
  }
}
