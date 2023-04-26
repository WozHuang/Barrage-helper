import _ from 'lodash';
import storage from '@render/utils/storage';
import { makeAutoObservable } from 'mobx';
import { makeLoggable } from 'mobx-log';

type Palette = Partial<Record<keyof typeof ColorVariablesMap, string>>;

const PALETTE_STORE_KEY = '__palette__';
export const ColorVariablesMap = {
  // [description, defaultValue]
  '--bg-color': ['窗口背景颜色', 'rgba(0, 0, 0, 0.5)']
};
export const ColorVariableKeys = Object.keys(ColorVariablesMap);

function applyPalette(palette: Palette) {
  for (const key of ColorVariableKeys) {
    if (palette[key]) {
      document.documentElement.style.setProperty(key, palette[key]);
    } else {
      document.documentElement.style.removeProperty(key);
    }
  }
}

export class Theme {
  palette: Palette = {};

  constructor() {
    storage.getItem<Palette>(PALETTE_STORE_KEY).then((palette) => {
      palette = palette || {};
      applyPalette(palette);
      this.palette = palette;
    });
    makeAutoObservable(this);
    __DEV__ && makeLoggable(this);
  }

  updatePalette(palette: Palette) {
    const newPalette = _.pickBy({
      ...this.palette,
      ...palette
    });
    this.palette = newPalette;
    applyPalette(newPalette);
    storage.setItem<Palette>(PALETTE_STORE_KEY, newPalette);
  }
}
