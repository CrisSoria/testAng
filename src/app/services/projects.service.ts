import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { iProject } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects$ = new BehaviorSubject<iProject[]>([
    {
      id: 1,
      name: 'Compu Henry',
      desc: 'Trabajo en equipo de 7 personas utilizando metodologías ágiles (SCRUM). Un mes de duración total, con springs semanales presentados a un product owner. Venta de insumos para computación con todas las funcionalidades de un E-commerce.',
      img: 'https://i.ibb.co/rwk20kr/ecommerce.png',
      github: 'https://github.com/CrisSoria/E-commerce',
      web: 'https://compu-henry.netlify.app',
    },
    {
      id: 2,
      name: 'Memories',
      desc: 'Red social que permite a los usuarios publicar eventos interesantes que sucedieron en sus vidas. Sistema de likes, gestión posteos, usuarios, login con google y sistema de post recomendados.',
      img: 'https://i.ibb.co/6NcCP1g/memories-Like-Edit-Delete.png',
      github: 'https://github.com/CrisSoria/FullStackMERNapp',
      web: 'https://social-media-mern-app.netlify.app',
    },
    {
      id: 3,
      name: 'Travel Track',
      desc: ' Aplicación para móviles que usando aplicaciones de google registra datos de un punto inicial a un punto final, calculando tiempo, distancia y precio del viaje.',
      img: 'https://i.ibb.co/PzZxjq9/Uber-Home.png',
      github: 'https://github.com/CrisSoria/Uber',
      web: 'https://expo.dev/@crissoria/uber-clone',
    },
    {
      id: 4,
      name: 'Travel Advisor',
      desc: 'App de información turística. Mediante geolocalización encuentra restaurantes, hoteles, atracciones, clima...',
      img: 'https://i.ibb.co/rspTv93/travel-Adv-min.png',
      github: 'https://github.com/CrisSoria/AsistenteViajes',
      web: 'https://asistente-viajes.netlify.app/',
    },
    {
      id: 5,
      name: 'Unichat Application',
      desc: 'Chat con Google y Facebook login, múltiples salas, envío de imágenes, online status,...',
      img: 'https://i.ibb.co/S5BxvP4/foto-Cafayate.png',
      github: 'https://github.com/CrisSoria/Chat-App',
      web: 'https://compu-henry.netlify.app',
    },
    {
      id: 6,
      name: 'Realtime Video Chat Application',
      desc: 'Aplicación para realizar videollamadas en tiempo real con solo compartir el ID de usuario para iniciar la llamada.',
      img: 'https://i.ibb.co/7WZRLD1/122.jpg',
      github: 'https://github.com/CrisSoria/React_Video_Chat_App',
      web: 'https://video-chat-cris.netlify.app',
    },
  ]);
  private path: string = environment.JSONBIN_URL;
  private key: string = '$2b$10$' + environment.JSONBIN_KEY;

  constructor(private http: HttpClient) {}

  fetchProjects() {
    const headers = new HttpHeaders({
      'secret-key': this.key,
    });
    this.http.get<iProject[]>(this.path, { headers }).subscribe((data) => {
      this.projects$.next(data);
    });
  }

  getProjects(): Observable<iProject[]> {
    this.fetchProjects();
    return this.projects$.asObservable();
  }
}
