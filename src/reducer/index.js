import { USERDETAILS, QUOTATIONS } from '../action/types';

const initialState = {
    user: {},
    quotations: [],
}

export default function reducer(state=initialState, action){
    const { type, data } = action;
    switch(type){
        case USERDETAILS:
            return {
                ...state,
                user: data,
            }
        case QUOTATIONS:
            return {
                ...state,
                quotations: data,
            }
        default:
            return state;
    }
}