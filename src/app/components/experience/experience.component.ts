import { Component } from '@angular/core';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      jobTitle: 'Senior Software Engineer',
      company: 'Derivco',
      dates: '2022-Present',
      technologies: ['.NET', 'Azure', 'Docker', 'Kubernetes', 'SQL Server', 'RabbitMQ', 'Kafka', 'CI/CD', 'Agile'],
      responsibilities: [
        'Designed and implemented cloud-native backend systems using C# .NET and Azure.',
        'Led architectural decisions and mentored junior developers in agile squads.',
        'Collaborated with QA and DevOps to ensure high-availability systems with minimal downtime.',
        'Excel at diagnosing production issues by replicating edge-case scenarios, identifying root causes, and implementing long-term fixes.',
        'Built responsive, user-friendly UI components using Vue.js, collaborating closely with UX/UI designers.',
        'Optimized API–DB communication by reducing connection count through pooling strategies and reducing per-request overhead.'
      ]
    },
    {
      jobTitle: 'Senior Software Engineer',
      company: 'Novapago',
      dates: '2020-2022',
      technologies: ['.NET', 'Entity Framework', 'SQL Server', 'AWS', 'Angular', 'Docker', 'CI/CD'],
      responsibilities: [
        'Migrated legacy systems to microservices, improved system reliability.',
        'Migrated legacy systems to microservices architecture using .NET, AWS, and Docker.',
        'Designed automated reporting pipelines using Kafka queues, reducing processing latency and enabling real-time analytics for clients.',
        'Designed and implemented intuitive user interfaces for web applications, improving user experience and accessibility.',
        'Built Angular-based dashboards that reduced support response time by providing real-time user activity logs.'
      ]
    },
    {
      jobTitle: 'BI Developer / Software Engineer',
      company: 'Ministerio Público Fiscal',
      dates: '2018-2022',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Pentaho'],
      responsibilities: [
        'Designed and developed BI solutions using Pentaho, PostgreSQL, and Python.',
        'Created interactive dashboards that improved investigative workflows.',
        'Led integration of multiple data sources into a centralized reporting platform.',
        'Tech stack: Pentaho, Python, PostgreSQL, Angular'
      ]
    },
    {
      jobTitle: 'BI Developer / Software Engineer',
      company: 'Telefónica',
      dates: '2013-2018',
      technologies: ['.NET', 'SSIS', 'SQL Server', 'Ruby', 'Selenium', 'DataWarehouse'],
      responsibilities: [
        'Developed ETL processes and BI dashboards for enterprise reporting.',
        'Led integration of multiple data sources into a centralized reporting platform.',
        'Automated data pipelines using SSIS and C#, reducing manual workload by 50%.'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      company: 'DC Sistemas y Servicios',
      dates: '2013-2018',
      technologies: ['.NET', 'SQL Server'],
      responsibilities: [
        'Built and maintained internal business systems using C# .NET and SQL Server.'
      ]
    }
  ];
}
