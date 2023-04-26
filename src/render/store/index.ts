import { createContext, useContext } from 'react';
import { Setting } from './setting';
import { Theme } from './theme';

export class RootStore {
  setting = new Setting();
  theme = new Theme();
}

export const store = new RootStore();

export const StoreContext = createContext<RootStore>(store);

export function useStore() {
  return useContext(StoreContext);
}
