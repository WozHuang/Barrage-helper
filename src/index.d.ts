import type { RenderIPC } from '@preload/index';

declare global {
  const __DEV__: boolean;
  const ipc: RenderIPC;
}

export {};
