import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

// Modules
import { AppRoutingModule } from './app-routing.module'
import { ComponentsModule } from './components/components.module'

// Components
import { AppComponent } from './app.component'
import { InicioComponent } from './pages/inicio/inicio.component'
import { GotyComponent } from './pages/goty/goty.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
