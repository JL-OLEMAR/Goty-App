import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public goty: any[] = []

  constructor (private readonly _firestore: AngularFirestore) { }

  ngOnInit (): void {
    this._firestore.collection('goty').valueChanges()
      .pipe(map((resp) => {
        return resp.map((resp: any) => ({ name: resp.name, value: resp.votos }))
      }))
      .subscribe((goty: any) => { this.goty = goty })
  }
}
