const initialState={
                counter:0
                }

export default function CounterReducer(state=initialState, action){

    switch (action.type) {
        case "INCREAMENT":
            return{
                ...state,
                counter:state.counter+1
            }
            
            break;
        case "DECREAMENT":
            return{
                ...state,
                counter:state.counter-1
            }

        default:
            return state;
            break;
    }


}