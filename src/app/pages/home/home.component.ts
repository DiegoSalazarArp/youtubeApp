import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Videos } from '../../models/youtube.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  videos: Videos[] = [];

  constructor(private youtueService: YoutubeService) {}

  ngOnInit(): void {
    this.cargarVideo();
  }

  cargarVideo() {
    this.youtueService.getVideos().subscribe((resp) => {
      this.videos.push(...resp);
      console.log(this.videos);
    });
  }

  mostrarVideo(video: Videos) {
    console.log(video);
    Swal.fire({
      html: `
      <h2>${video.title}</h2>
      <iframe 
      width="100%" 
      height="315" 
      src="https://www.youtube.com/embed/${video.resourceId.videoId}" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>`,
    });
  }
}
