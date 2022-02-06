import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {
  // data
  @Input() results: any[] = []

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

  onSelect (event: any): void {
    console.log(event)
  }
}
