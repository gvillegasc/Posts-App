import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/appState';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  userSelected: any = {};
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userSelectedF();
  }

  userSelectedF() {
    this.store.select('modal').subscribe(({ user }) => {
      this.userSelected = user;
    });
  }
}
