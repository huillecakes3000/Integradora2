import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';  // Ensure this path is correct
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  profilePic: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadProfilePic();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const token = 'your-jwt-token';  // Replace with your method to get the token

      this.http.post(`${environment.apiUrl}/upload_profile_pic`, formData, {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      }).subscribe(response => {
        console.log('File uploaded successfully', response);
        this.loadProfilePic();  // Reload profile picture after upload
      }, error => {
        console.error('Error uploading file', error);
      });
    }
  }

  setResult(event: any) {
    console.log('Alert dismissed with result:', event);
  }

  loadProfilePic() {
    const token = 'your-jwt-token';  // Replace with your method to get the token

    this.http.get(`${environment.apiUrl}/get_profile_pic`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe((response: any) => {
      this.profilePic = `${environment.apiUrl}/uploads/${response.file_path}`;
    }, error => {
      console.error('Error fetching profile picture', error);
    });
  }
}
