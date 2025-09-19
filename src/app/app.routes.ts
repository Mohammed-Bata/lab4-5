import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart';
import { HomeComponent } from './home/home';
import { AboutusComponent } from './aboutus/aboutus';
import { ContactusComponent } from './contactus/contactus';
import { NotFoundComponent } from './notfount/notfound';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products Page',
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    title: 'Aboutus Page',
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    title: 'Contactus Page',
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
    title: 'Shopping Cart Page',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login Page',
  },
  {
    path: 'register',
    component: Register,
    title: 'Register Page',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
