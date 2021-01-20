import { storage } from '../../services';

export const updateTheme = (theme: string) => {
  storage.set('theme', theme);
  return { type: theme };
};
