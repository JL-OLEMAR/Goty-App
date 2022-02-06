import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public games: any[] = []

  constructor (private readonly _firestore: AngularFirestore) { }

  ngOnInit (): void {
    this._firestore.collection('goty').valueChanges()
      .pipe(map((resp) => {
        return resp.map((resp: any) => ({ name: resp.name, value: resp.votos }))
      }))
      .subscribe((games: any) => { this.games = games })
  }
}
