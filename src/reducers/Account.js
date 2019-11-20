import {
    UPDATE_BALANCE_INFO
} from "../actions/Account";


const  defaultState = {
    accInfo: {
      account_level: 1,
      account_status: 0,
      kyc_level: 1,
      kyc_level_status: 1
    },
}

export default account = (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_BALANCE_INFO:{
            return {
                ...state,
                accInfo: action.info || {}
            };
        }
        default :
           return state;
    }
}
