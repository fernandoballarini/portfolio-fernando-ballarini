import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ExperienceComponent, SkillsComponent, EducationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-fernando-ballarini';
  activeSection: string = ''; // Tracks the currently active section

  showSection(section: string): void {
    this.activeSection = section; // Updates the active section
    console.log(`Active section changed to: ${section}`);
  }
}
