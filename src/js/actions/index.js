import loglevel from "loglevel";
import { ADD_ARTICLE } from "../constants/action-types";

loglevel.info('src/js/actions/index')

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
