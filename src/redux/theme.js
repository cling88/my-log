import { createAction, handleActions } from 'redux-actions'

const SET_THEME = 'theme/INIT_PAGE'

export const setTheme = createAction(SET_THEME, keyword => keyword);

const initialState = {
    themeType: null,
}

const theme = handleActions({
    [SET_THEME]: (state, {payload: keyword}) => ({
        ...state,
        themeType: keyword
    })
}, initialState);


export default theme;