import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'
import { Game } from 'interfaces/getGoty.interface'

const baseURl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor (private readonly _http: HttpClient) { }

  getNominados (): Observable<Game[]> {
    return this._http.get<Game[]>(`${baseURl}/goty`)
  }
}
