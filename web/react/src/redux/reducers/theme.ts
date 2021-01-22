const LIGHT_THEME: string = 'light';
const DARK_THEME: string = 'dark';

const LIGHT_TEXT_COLOR: string = 'text-dark';
const DARK_TEXT_COLOR: string = 'text-light';

const LIGHT_MUTED_TEXT_COLOR: string = 'text-muted';
const DARK_MUTED_TEXT_COLOR: string = 'text-light';

const LIGHT_BORDER: string = 'border';
const DARK_BORDER: string = 'border border-white';

const LIGHT_BORDER_TOP: string = 'border-top border-danger';
const DARK_BORDER_TOP: string = 'border-top border-white';

const LIGHT_BORDER_BOTTOM: string = 'border-bottom border-danger';
const DARK_BORDER_BOTTOM: string = 'border-bottom border-white';

const LIGHT_SPINNER_VARIANT: string = 'danger';
const DARK_SPINNER_VARIANT: string = 'light';

const LIGHT_REVERT_SPINNER_VARIANT: string = 'light';
const DARK_REVERT_SPINNER_VARIANT: string = 'dark';

const LIGHT_BUTTON_VARIANT: string = 'danger';
const DARK_BUTTON_VARIANT: string = 'light';

const LIGHT_PRIMARY_BACKGROUND_COLOR: string = 'bg-danger';
const DARK_PRIMARY_BACKGROUND_COLOR: string = 'bg-black';

const LIGHT_SECONDARY_BACKGROUND_COLOR: string = 'bg-white';
const DARK_SECONDARY_BACKGROUND_COLOR: string = 'bg-black';

const LIGHT_LIST_ITEM_BORDER_BOTTOM: string = 'border-bottom';
const DARK_LIST_ITEM_BORDER_BOTTOM: string = 'border-bottom border-white';

const LIGHT_INPUT: string = '';
const DARK_INPUT: string = 'bg-black text-white';

const LIGHT_BADGE: string = 'danger';
const DARK_BADGE: string = 'dark';

const LIGHT_LINK: string = 'text-primary';
const DARK_LINK: string = 'text-white';

interface IThemeState {
  theme: string;
  textColor: string;
  mutedTextColor: string;
  spinnerVariant: string;
  revertSpinnerVariant: string;
  buttonVariant: string;
  border: string;
  borderTop: string;
  borderBottom: string;
  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  listItemBorderBottom: string;
  input: string;
  badge: string;
  link: string;
}

const initialState: IThemeState = {
  theme: LIGHT_THEME,
  textColor: LIGHT_TEXT_COLOR,
  mutedTextColor: LIGHT_MUTED_TEXT_COLOR,
  spinnerVariant: LIGHT_SPINNER_VARIANT,
  revertSpinnerVariant: LIGHT_REVERT_SPINNER_VARIANT,
  buttonVariant: LIGHT_BUTTON_VARIANT,
  border: LIGHT_BORDER,
  borderTop: LIGHT_BORDER_TOP,
  borderBottom: LIGHT_BORDER_BOTTOM,
  primaryBackgroundColor: LIGHT_PRIMARY_BACKGROUND_COLOR,
  secondaryBackgroundColor: LIGHT_SECONDARY_BACKGROUND_COLOR,
  listItemBorderBottom: LIGHT_LIST_ITEM_BORDER_BOTTOM,
  input: LIGHT_INPUT,
  badge: LIGHT_BADGE,
  link: LIGHT_LINK
};

const themeReducer = (state: IThemeState = initialState, action: any) => {
  switch (action.type) {
    case LIGHT_THEME:
      return {
        ...state,
        theme: LIGHT_THEME,
        textColor: LIGHT_TEXT_COLOR,
        mutedTextColor: LIGHT_MUTED_TEXT_COLOR,
        spinnerVariant: LIGHT_SPINNER_VARIANT,
        revertSpinnerVariant: LIGHT_REVERT_SPINNER_VARIANT,
        buttonVariant: LIGHT_BUTTON_VARIANT,
        border: LIGHT_BORDER,
        borderTop: LIGHT_BORDER_TOP,
        borderBottom: LIGHT_BORDER_BOTTOM,
        primaryBackgroundColor: LIGHT_PRIMARY_BACKGROUND_COLOR,
        secondaryBackgroundColor: LIGHT_SECONDARY_BACKGROUND_COLOR,
        listItemBorderBottom: LIGHT_LIST_ITEM_BORDER_BOTTOM,
        input: LIGHT_INPUT,
        badge: LIGHT_BADGE,
        link: LIGHT_LINK
      };
    case DARK_THEME:
      return {
        ...state,
        theme: DARK_THEME,
        textColor: DARK_TEXT_COLOR,
        mutedTextColor: DARK_MUTED_TEXT_COLOR,
        spinnerVariant: DARK_SPINNER_VARIANT,
        revertSpinnerVariant: DARK_REVERT_SPINNER_VARIANT,
        buttonVariant: DARK_BUTTON_VARIANT,
        border: DARK_BORDER,
        borderTop: DARK_BORDER_TOP,
        borderBottom: DARK_BORDER_BOTTOM,
        primaryBackgroundColor: DARK_PRIMARY_BACKGROUND_COLOR,
        secondaryBackgroundColor: DARK_SECONDARY_BACKGROUND_COLOR,
        listItemBorderBottom: DARK_LIST_ITEM_BORDER_BOTTOM,
        input: DARK_INPUT,
        badge: DARK_BADGE,
        link: DARK_LINK
      };
    default:
      return state;
  }
};

export default themeReducer;
