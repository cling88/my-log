import { createAction, handleActions } from 'redux-actions'

const INIT_PAGE = 'history/INIT_PAGE'
const SET_KEYWORD = 'history/SET_KEYWORD'

export const initPage = createAction(INIT_PAGE);
export const setKeyword = createAction(SET_KEYWORD);

const initialState = {
   keyword: null
}

const history = handleActions({
    [INIT_PAGE]: () => initialState,
    [SET_KEYWORD]: (state, {payload: param}) => ({
        ...state,
        keyword: param
    })
}, initialState);


export default history;