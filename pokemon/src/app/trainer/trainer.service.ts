import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class TrainerService {

  private baseUrl: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon';

  constructor(private http: HttpClient) {}

  /**
   * Obtener lista de entrenadores
   * @returns Observable con la lista de entrenadores
   */
  getTrainersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trainers.json`); 
  }

  /**
   * Obtener detalles de un entrenador por ID
   * @param id Identificador del entrenador
   * @returns Observable con los detalles del entrenador
   */
  getTrainerDetail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/trainers.json`); 
  }
}
