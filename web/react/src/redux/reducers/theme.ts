const LIGHT_THEME: string = 'light';
const DARK_THEME: string = 'dark';

const themeReducer = (state: string = LIGHT_THEME, action: any) => {
  switch (action.type) {
    case LIGHT_THEME:
      state = LIGHT_THEME;
      return state;
    case DARK_THEME:
      state = DARK_THEME;
      return state;
    default:
      return state;
  }
};

export default themeReducer;
