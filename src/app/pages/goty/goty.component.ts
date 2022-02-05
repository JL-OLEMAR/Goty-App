/* eslint-disable @typescript-eslint/no-floating-promises */
import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'

import { Game } from 'interfaces/getGoty.interface'
import { GameService } from 'services/game.service'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  games: Game[] = []

  constructor (private readonly _gameService: GameService) { }

  ngOnInit (): void {
    this._gameService.getNominados()
      .subscribe(games => (this.games = games))
  }

  voteGame (game: Game): void {
    this._gameService.voteGame(game.id)
      .subscribe((resp: any) => {
        if (resp.ok === true) {
          Swal.fire('Gracias', resp.message, 'success')
        } else {
          Swal.fire('Oops!!!', resp.message, 'error')
        }
      })
  }
}
