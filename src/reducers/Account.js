import {
    UPDATE_BALANCE_INFO
} from "../actions/Account";


import {accInfo} from '../models/Account';

const  defaultState = {
    accInfo,
}

export default account = (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_BALANCE_INFO:{
            console.log('reducer ...:' + JSON.stringify(action.info));
            return {
                ...state,
                accInfo: action.info || {}
            };
        }
        default :
           return state;
    }
}
