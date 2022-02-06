import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { environment } from '../../environments/environment'
import { Game } from '../interfaces/getGoty.interface'

const baseURl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _games: Game[] = []

  constructor (private readonly _http: HttpClient) { }

  getNominados (): Observable<Game[]> {
    if (this._games.length > 0) {
      console.log('Desde cache')
      return of(this._games)
    } else {
      // There aren't any games in the array
      console.log('Desde internet')
      return this._http.get<Game[]>(`${baseURl}/goty`)
        .pipe(tap(games => (this._games = games)))
    }
  }

  voteGame (id: string): Observable<any> {
    return this._http.post(`${baseURl}/goty/${id}`, {})
      .pipe(catchError(err => { return of(err.error) }))
  }
}
