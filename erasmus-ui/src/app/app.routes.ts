import { Routes } from '@angular/router';
import { DoctoralTrainingComponent } from './doctoral/doctoral-training/doctoral-training/doctoral-training.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { DoctoralPracticeComponent } from './doctoral/doctoral-practice/doctoral-practice/doctoral-practice.component';
import { StudentPracticeComponent } from './student/student-practice/student-practice/student-practice.component';
import { StudentTrainingComponent } from './student/student-training/student-training/student-training.component';
import { DoctoralShortTermTrainingComponent } from './doctoral/doctoral-short-term-training/doctoral-short-term-training/doctoral-short-term-training.component';
import { DoctoralInformationComponent } from './doctoral/doctoral-information/doctoral-information/doctoral-information.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { TeachingMobilityComponent } from './administrative-personal/teaching/teaching-mobility/teaching-mobility.component';
import { TrainingMobilityComponent } from './administrative-personal/training/training-mobility/training-mobility.component';
import { LoginComponent } from './log-in/login/login.component';
import { ChatComponent } from './chat/chat/chat.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'news', component: NewsPageComponent },
    { path: 'doctoral-information', component: DoctoralInformationComponent },
    { path: 'doctoral-training', component: DoctoralTrainingComponent },
    { path: 'doctoral-practice', component: DoctoralPracticeComponent },
    { path: 'doctoral-short-term-training', component: DoctoralShortTermTrainingComponent },
    { path: 'student-practice', component: StudentPracticeComponent },
    { path: 'student-training', component: StudentTrainingComponent },
    { path: 'administrative-teaching', component: TeachingMobilityComponent },
    { path: 'administrative-training', component: TrainingMobilityComponent },
    { path: 'chat', component: ChatComponent }
];
