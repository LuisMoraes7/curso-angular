import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }
  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }
  add(animals: Animal[], animal: Animal){
    let newlist = animals
    newlist.push(animal)
    return newlist
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal | false> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse): Observable<false>{
    return of(false)
  }

  private useranimals: Animal[] = []
  addLocalStorage(animal: Animal){
    let newlist = this.useranimals
    newlist.push(animal)
    this.useranimals = newlist
  }

  salvarLista(animals: Animal[]){
    localStorage.setItem('myList', JSON.stringify(animals))
  }
  getUserAnimals(){
    return this.useranimals
  }
}
