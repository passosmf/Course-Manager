import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../pipe/replace.pipe';
import { StarComponent } from '../star/star.component';

import { Course } from './course';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class CourseModule  {


}
