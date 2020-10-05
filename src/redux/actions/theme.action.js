import { SWITCH_THEME, LIGHT_THEME, DARK_THEME } from '../constants/theme.constant';

export const switchTheme = (data) => ({
    type: SWITCH_THEME,
    data: data
})