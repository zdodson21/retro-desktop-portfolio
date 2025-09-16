import { Component, signal, WritableSignal } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'welcome',
  imports: [WindowFrameComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  public tips: Array<string> = [
    "If you don't know how to find something, you can look for directions in Help. Just click the Start button, and then click Help.",
    'This web application functions similarly to many desktop computer interfaces. You should be able to navigate this web application similar to how you would navigate many desktop computers.',
    'A good place to start is the about me page in Internet Explorer. Just click the Start button, and then click Internet Explorer. You will be taken to the About Me page by default. You can also find the "about-me.html" file in Windows Explorer.',
    "You can reset this web application's local storage values in Control Panel. Click the Start button, and then hover over Settings, and then click Control Panel. You will find a button to reset to the initial default state there.",
    'The Shut Down command in the Shut Down menu will take you to my GitHub profile (due to browser security blocking the capability to close browser tabs with JavaScript / TypeScript).',
    'You can open Internet Explorer to view my "About Me" and Project pages. Internet Explorer can be accessed from the Desktop or Start Menu. These pages can also be accessed by locating and double clicking them within Windows Explorer.',
  ];
  public tipDisplayIndex: WritableSignal<number> = signal(0);

  /**
   * @description Navigate user to Zach's GitHub repo release page for this project
   */
  public whatsNewButtonHelper() {
    globalThis.open('https://github.com/zdodson21/retro-desktop-portfolio/releases');
  }

  /**
   * @description Navigate user to Zach's GitHub profile in new tab
   */
  public githubProfileButtonHelper() {
    globalThis.open('https://github.com/zdodson21');
  }

  /**
   * @description Displays next message from tips[], if number goes over array length it will go back to
   * 0
   */
  public nextTipHelper() {
    let nextIndex: number = this.tipDisplayIndex() + 1;

    if (nextIndex > this.tips.length - 1) nextIndex = 0;

    this.tipDisplayIndex.set(nextIndex);
  }

  /**
   * @description Displays previous message from tips[], if number goes below 0 it will go to the last
   * index in the array
   */
  public previousTipHelper() {
    let previousIndex: number = this.tipDisplayIndex() - 1;

    if (previousIndex < 0) previousIndex = this.tips.length - 1;

    this.tipDisplayIndex.set(previousIndex);
  }
}
