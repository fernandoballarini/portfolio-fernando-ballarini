import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../common/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sectionChange = new EventEmitter<string>();
  words = [
    'Welcome to My Portfolio',
    'Software Engineer',
  ];
  currentWordIndex = 0;
  finalText = this.words[0];
  displayedText = '';
  private chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  private scrambleInterval: any;
  private wordChangeInterval: any;

  ngOnInit() {
    this.displayedText = this.words[0]; // Show first word for SSR
    if (typeof window !== 'undefined') {
      // Safe to use window, document, localStorage, etc.
      console.log(window.location.href);
      this.startScramble();
      this.wordChangeInterval = setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.finalText = this.words[this.currentWordIndex];
      this.startScramble();
    }, 5000);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      clearInterval(this.scrambleInterval);
      clearInterval(this.wordChangeInterval);
    }
  }

  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onSectionClick(section: string) {
    console.log(`Section clicked: ${section}`);
    this.sectionChange.emit(section);
  }

  onButtonClicked(section: string) {
    console.log(`Section clicked: ${section}`);
    this.sectionChange.emit(section);
  }

  startScramble() {
    clearInterval(this.scrambleInterval);
    let frame = 0;
    const totalFrames = 20;
    const revealDelay = 40;
    let revealed = Array(this.finalText.length).fill(false);
    let current = Array(this.finalText.length).fill('');

    const scrambleStep = () => {
      for (let i = 0; i < this.finalText.length; i++) {
        if (!revealed[i]) {
          if (Math.random() < (frame / totalFrames)) {
            current[i] = this.finalText[i];
            revealed[i] = true;
          } else {
            current[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
          }
        }
      }
      this.displayedText = current.join('');
      frame++;

      if (revealed.every(Boolean)) {
        this.displayedText = this.finalText;
      } else {
        this.scrambleInterval = setTimeout(scrambleStep, revealDelay);
      }
    };

    scrambleStep();
  }
}
