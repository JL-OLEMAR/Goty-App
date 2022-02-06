import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

// Modules
import { environment } from '../environments/environment'
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
    ComponentsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
