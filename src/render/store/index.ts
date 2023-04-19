import { SettingsStore } from './settingsStore';
import { createContext, useContext } from 'react';

export class RootStore {
  settings = new SettingsStore(this);
}

export const store = new RootStore();

export const StoreContext = createContext<RootStore>(store);

export function useStore() {
  return useContext(StoreContext);
}
