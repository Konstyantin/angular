import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {ProtectedComponent} from './protected/protected.component';
import {ProductComponent} from './product/product.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'contacts', redirectTo: 'contact'},
    { path: 'login', component: LoginComponent},
    { path: 'product/:id', component: ProductComponent},
    //
    // { path: 'protected', component: ProtectedComponent, canActivate: [ Logged]},
    // { path: 'products', component: ProductComponent}
    // { path: 'products', component: ProductComponent, children: []}
];

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent,
    FormNgModelComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      {provide: APP_BASE_HREF, useValue: '/'},
      // AUTH_PROVIDERS,
      // LoggedInGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }