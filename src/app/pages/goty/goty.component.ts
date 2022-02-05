import { Component, OnInit } from '@angular/core'
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
}
