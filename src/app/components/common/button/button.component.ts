import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() icon: string = ''; // Material icon name
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() value?: string; // Value to emit on click

  @Output() clicked = new EventEmitter<string>();

  onClick() {
    console.log(`Button clicked: ${this.label} with value: ${this.value}`);
    this.clicked.emit(this.value);
  }
}
