import loglevel from "loglevel";
import {NOT_LOGGED, LOGGING} from "../constants/action-types";
import {notLogged, logging} from "../actions/index";

loglevel.info('src/js/reducers/index')

const initialState = {
    status: 'NOT_LOGGED'
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGGING':
            return Object.assign({}, state, {
                status: 'LOGGING'
            })
        default:
            return state
    }
}
export default rootReducer;
