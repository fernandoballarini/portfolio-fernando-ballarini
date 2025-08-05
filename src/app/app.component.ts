import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/common/modal/modal.component';
import { version } from '../environments/version'; // Import the version
import { LanguagesComponent } from './components/languages/languages.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    CommonModule,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})

export class AppComponent {
  title = 'portfolio-fernando-ballarini';
  activeSection: string = ''; // Tracks the currently active section
  showExperienceModal = false;
  showSkillsModal = false;
  showEducationModal = false;
  showLanguagesModal = false;
  appVersion = version;

  onSectionChange(section: string) {
    switch (section) {
      case 'experience':
        this.showExperienceModal = true;
        break;
      case 'skills':
        this.showSkillsModal = true;
        break;
      case 'education':
        this.showEducationModal = true;
        break;
      case 'language':
        this.showLanguagesModal = true;
        break;
    }
  }
}
