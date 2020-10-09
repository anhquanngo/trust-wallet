import { SWITCH_THEME, LIGHT_THEME, DARK_THEME } from '../constants';
import { lightTheme, darkTheme } from '../../themes';


export const themeReducer = (state = lightTheme, action) => {
    switch (action.type) {
        case SWITCH_THEME: {

            let { data } = action.data;

            console.log(state, data);
            if (data === 1) {
                state = darkTheme
                console.log(state, data);
                return state
            }
            if (data === 0) {
                state = lightTheme
                console.log(state, data);
                return state
            }

        };
        // case LIGHT_THEME: return lightTheme;
        // case DARK_THEME: return darkTheme;
        default: return state
    }
}