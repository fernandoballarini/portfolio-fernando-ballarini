import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() icon: string = ''; // Material icon name
  @Input() type: 'button-bar' | 'button-list' = 'button-bar';
  @Input() value?: string; // Value to emit on click

  @Output() clicked = new EventEmitter<string>();

  onClick() {
    console.log(`Button clicked: ${this.label} with value: ${this.value}`);
    this.clicked.emit(this.value);
  }
}
