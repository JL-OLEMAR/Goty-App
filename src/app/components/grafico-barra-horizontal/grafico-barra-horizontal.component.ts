/* eslint-disable @typescript-eslint/no-for-in-array */
import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  private readonly _intervalo!: any
  // data
  results: any[] = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 25
    },
    {
      name: 'Juego 3',
      value: 15
    },
    {
      name: 'Juego 4',
      value: 30
    }
  ]

  // options
  colorScheme: string = 'nightLights'
  gradient = true
  showLegend = true
  showXAxis = true
  showXAxisLabel = true
  showYAxis = true
  showYAxisLabel = true
  xAxisLabel = 'Votos'
  yAxisLabel = 'Juegos'

  constructor () {
    this._intervalo = setInterval(() => {
      const newResults = [...this.results]
      for (const i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500)
      }
      this.results = [...newResults]
    }, 10000)
  }

  ngOnDestroy (): void {
    clearInterval(this._intervalo)
  }

  onSelect (event: any): void {
    console.log(event)
  }
}
