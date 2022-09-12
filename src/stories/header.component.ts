import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'storybook-header',
  template: `<header>
    <div class="wrapper">
      <div>
        <svg width="76" height="35" viewBox="0 0 76 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.3057 19.203H51.9525V35H59.8586V19.203H65.5055V11.3036H46.3057V19.203Z" fill="#2A2A37"/>
          <path d="M28.6669 11.3027H0V34.9991H7.90519V19.2067H12.4228V34.9991H20.329V19.2067H24.8466V34.9991H32.7527V15.3855C32.7527 14.3027 32.3223 13.2642 31.556 12.4985C30.7898 11.7328 29.7505 11.3027 28.6669 11.3027Z" fill="#2A2A37"/>
          <path d="M44.0473 11.3036H36.1412V35H44.0473V11.3036Z" fill="#2A2A37"/>
          <path d="M75.6709 11.3036H67.7648V35H75.6709V11.3036Z" fill="#2A2A37"/>
          <path d="M40.7278 7.85974C42.8828 7.51019 44.3462 5.48112 43.9964 3.32769C43.6466 1.17425 41.616 -0.288087 39.461 0.0614643C37.306 0.411016 35.8426 2.44009 36.1924 4.59352C36.5422 6.74696 38.5728 8.2093 40.7278 7.85974Z" fill="#2A2A37"/>
          <path d="M75.8301 4.1114C75.9174 1.92978 74.2184 0.0904836 72.0352 0.00321877C69.852 -0.0840461 68.0113 1.61377 67.924 3.79539C67.8367 5.97701 69.5357 7.8163 71.7189 7.90357C73.9021 7.99083 75.7428 6.29302 75.8301 4.1114Z" fill="#2A2A37"/>
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
