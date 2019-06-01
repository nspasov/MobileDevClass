import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'description', loadChildren: './description/description.module#DescriptionPageModule' },
 //{ path: 'idea-details', loadChildren: './idea-details/idea-details.module#IdeaDetailsPageModule' }
 //{ path: 'film-details', loadChildren: './film-details/film-details.module#FilmDetailsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
