import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoPath: string = 'assets/logo-autek.png';

  activeButtonId: string | null = null;

  setActive(id: string) {
    this.activeButtonId = id;
    this.setInactiveOpacity();
  }

  clearActive() {
    this.activeButtonId = null;
    this.setNormalOpacity();
  }

  private setInactiveOpacity() {
    const buttons = document.querySelectorAll('.toolbar-button');
    buttons.forEach((button: Element) => { // Cambiamos HTMLElement a Element
      if ((button as HTMLElement).id !== this.activeButtonId) {
        (button as HTMLElement).classList.add('inactive');
      }
    });
  }
  
  private setNormalOpacity() {
    const buttons = document.querySelectorAll('.toolbar-button');
    buttons.forEach((button: Element) => { // Cambiamos HTMLElement a Element
      (button as HTMLElement).classList.remove('inactive');
    });
  }
}
