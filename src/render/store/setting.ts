import { makeAutoObservable } from 'mobx';
import { makeLoggable } from 'mobx-log';

export class Setting {
  constructor() {
    makeAutoObservable(this);
    __DEV__ && makeLoggable(this);
  }

  stick = false;

  toggleStick = (stick?: boolean) => {
    this.stick = stick ?? !this.stick;
    ipc.stickMainWindow(this.stick);
  };
}
