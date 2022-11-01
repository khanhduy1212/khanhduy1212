import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:MainComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/:maSP', component:ProductdetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'news', component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
