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
    'angular': 'assets/icons/angular.png',
    '.net': 'assets/icons/dotnet.png',
    'sql server': 'assets/icons/sqlserver.png',
    'cicd': 'assets/icons/cicd.png',
    'kubernetes': 'assets/icons/kubernetes.png',
    'docker': 'assets/icons/docker.png',
    'rabbitmq': 'assets/icons/rabbitmq.png',
    'kafka': 'assets/icons/kafka.png',
    'agile': 'assets/icons/agile.png',
    'pentaho': 'assets/icons/pentaho.png',
    'python': 'assets/icons/python.png',
    'postgressql': 'assets/icons/postgressql.png',
    'azure': 'assets/icons/azure.png',
    'typescript': 'assets/icons/typescript.png',
    'html': 'assets/icons/html.png',
    'git': 'assets/icons/git.png',
    'aws': 'assets/icons/aws.png',
  };

  getTechnologyImage(tech: string): string | null {
    return this.technologyImageMap[tech.toLowerCase()] || null;
  }
}

