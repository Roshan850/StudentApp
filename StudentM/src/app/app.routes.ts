import { Routes } from '@angular/router';
import { Register } from './registration/register/register';
import { Login } from './loginForm/login/login';
import { Table } from './table/table';

export const routes: Routes = [
    {
        path: '',
        component: Table
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    }
];
