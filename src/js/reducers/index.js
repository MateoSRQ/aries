import loglevel from "loglevel";
import {NOT_LOGGED, LOGGING} from "../constants/action-types";
import {notLogged, logging} from "../actions/index";

loglevel.info('src/js/reducers/index')

const initialState = notLogged();

function rootReducer(state = initialState, action) {
    if (action.type === NOT_LOGGED) {
        return Object.assign({}, state, {
        });
    }
    return state;
}
export default rootReducer;
