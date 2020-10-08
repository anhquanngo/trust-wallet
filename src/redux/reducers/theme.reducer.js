import { SWITCH_THEME, LIGHT_THEME, DARK_THEME } from '../constants';
import { lightTheme, darkTheme } from '../../themes';

export const themeReducer = (state = lightTheme, action) => {
    switch (action.type) {
        case SWITCH_THEME: return state;
        case LIGHT_THEME: return lightTheme;
        case DARK_THEME: return darkTheme;
        default: return state
    }
}