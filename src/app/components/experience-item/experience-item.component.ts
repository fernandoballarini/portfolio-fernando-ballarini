import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent {
  @Input() jobTitle!: string;
  @Input() company!: string;
  @Input() dates!: string;
  @Input() technologies!: string[];
  @Input() responsibilities!: string[];

  private technologyImageMap: { [key: string]: string } = {
    //angular: 'assets/icons/angular.svg',
    '.net': 'assets/icons/dotnet.png',
    //'c#': 'assets/icons/csharp.svg',
    //'sql server': 'assets/icons/sql-server.svg',
    azure: 'assets/icons/azure.png',
    //typescript: 'assets/icons/typescript.svg',
    //javascript: 'assets/icons/javascript.svg',
    //html: 'assets/icons/html.svg',
    //css: 'assets/icons/css.svg',
    //sass: 'assets/icons/sass.svg',
    //git: 'assets/icons/git.svg',
  };

  getTechnologyImage(tech: string): string | null {
    return this.technologyImageMap[tech.toLowerCase()] || null;
  }
}

