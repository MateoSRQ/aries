import loglevel from "loglevel";
import { NOT_LOGGED, LOGGING } from "../constants/action-types";

loglevel.info('src/js/actions/index')

export function notLogged(payload) {
    return { type: NOT_LOGGED, payload };
}

export function logging(payload) {
    return { type: LOGGING, payload };
}
