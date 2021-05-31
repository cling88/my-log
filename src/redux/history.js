import { createAction, handleActions } from 'redux-actions'

const INIT_PAGE = 'history/INIT_PAGE'

export const initPage = createAction(INIT_PAGE);

const initialState = {
    dateList: [],
    langList: [],
    keyword: [],
    historyList: [],
}

const history = handleActions({
    [INIT_PAGE]: () => initialState
}, initialState);


export default history;