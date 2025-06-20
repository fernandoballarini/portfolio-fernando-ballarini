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
}
