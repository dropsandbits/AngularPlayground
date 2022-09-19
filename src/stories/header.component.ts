import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'storybook-header',
  template: `<header>
    <div class="wrapper">
      <div>
      <svg width="76" height="37" viewBox="0 0 76 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.2138 20.3019H51.8494V36.1915H59.7398V20.3019H65.3754V12.3562H46.2138V20.3019Z" fill="#2A2A37"/>
<path d="M28.61 12.3552H0V36.1905H7.8895V20.3056H12.3982V36.1905H20.2886V20.3056H24.7973V36.1905H32.6877V16.462C32.6877 15.3728 32.2581 14.3283 31.4934 13.5581C30.7287 12.7879 29.6915 12.3552 28.61 12.3552Z" fill="#2A2A37"/>
<path d="M43.9599 12.3562H36.0695V36.1915H43.9599V12.3562Z" fill="#2A2A37"/>
<path d="M75.5207 12.3562H67.6303V36.1915H75.5207V12.3562Z" fill="#2A2A37"/>
<path d="M40.647 8.89214C42.7977 8.54054 44.2582 6.49957 43.9091 4.33352C43.56 2.16746 41.5334 0.696552 39.3827 1.04815C37.232 1.39975 35.7715 3.44072 36.1206 5.60677C36.4697 7.77283 38.4962 9.24374 40.647 8.89214Z" fill="#2A2A37"/>
<path d="M75.6796 5.12182C75.7668 2.92742 74.0711 1.07734 71.8922 0.989566C69.7133 0.901789 67.8763 2.60955 67.7892 4.80396C67.702 6.99837 69.3977 8.84844 71.5766 8.93622C73.7555 9.02399 75.5924 7.31623 75.6796 5.12182Z" fill="#2A2A37"/>
</svg>

      </div>
      <div>
        <div *ngIf="user">
        <storybook-button
          *ngIf="user"
          [primary]="true"
          size="small"
          (onClick)="onClick($event)"
          label="Add transaction"
        ></storybook-button>
          <span class="welcome">
            <b>{{ user.name }}</b>
          </span>
        </div>
        <div *ngIf="!user">
          <storybook-button
            *ngIf="!user"
            size="small"
            class="margin-left"
            (onClick)="onLogin.emit($event)"
            label="Log in"
          ></storybook-button>
          <storybook-button
            *ngIf="!user"
            primary
            size="small"
            primary="true"
            class="margin-left"
            (onClick)="onCreateAccount.emit($event)"
            label="Sign up"
          ></storybook-button>
        </div>
      </div>
    </div>
  </header>`,
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
