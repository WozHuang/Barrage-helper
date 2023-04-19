import type { RootStore } from './index';
import { makeAutoObservable } from 'mobx';
import { makeLoggable } from 'mobx-log';

export class SettingsStore {
  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
    __DEV__ && makeLoggable(this);
  }

  private stick = false;

  toggleStick = (stick?: boolean) => {
    this.stick = stick ?? !this.stick;
    ipc.stickMainWindow(this.stick);
  };
}
