import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'children',
    loadComponent: () =>
      import('./children/children.page').then((m) => m.ChildrenPage),
  },
  {
    path: 'child-details/:id',
    loadComponent: () =>
      import('./child-details/child-details.page').then(
        (m) => m.ChildDetailsPage,
      ),
  },
  {
    path: 'campaigns',
    loadComponent: () => import('./campaigns/campaigns.page').then( m => m.CampaignsPage)
  },
];
