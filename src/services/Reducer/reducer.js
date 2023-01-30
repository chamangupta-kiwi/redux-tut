import {Add_To_Cart} from '../constants'

const initialState={
    cartData :[]
}

export default cardItems =(state = initialState,action)=>{
    switch(action.type){
        case Add_To_Cart:
            return{
                ...state,
                cartData:action.data
            }
            default:
                    return state
                
    }

}