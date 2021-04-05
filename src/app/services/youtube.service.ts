import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { YoutubeResponse } from '../models/youtube.models';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeURL = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyAVzOB1SJyNU3DLHaisaRckzO6TUlJvNnw';
  private playlistId = 'UUcvbtCsO8ZCf91YZf3P5Tdg';
  private nextPageToken = '';
  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeURL}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlistId)
      .set('key', this.apikey)
      .set('pageToken', this.nextPageToken);
    return this.http
      .get<YoutubeResponse>(url, { params })
      .pipe(
        map((resp) => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        // Obtener video
        map((items) => items.map((video) => video.snippet))
      );
  }
}
