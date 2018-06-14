import { EMPOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPOYEE_UPDATE:
        //action.payload === { prop: name, ,value: 'john }
            return 
        default:
            return state;
    }
};