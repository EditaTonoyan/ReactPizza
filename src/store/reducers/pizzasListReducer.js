const initialState = {
 ordered:{},
 error:{},
 orderedCount:0,
 orderedPrcie:0,
};
const pizzasListReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'getPizzas' : {
            return {
                ...state,
                pizzas: action.data
            }
        }

        case 'ADD_TO_CHART': {
            const {id, value } = action.target;
            if(state.ordered.hasOwnProperty(id)){
                if(state.ordered[id].hasOwnProperty("price")){
                    if(state.ordered[id].hasOwnProperty("count")){
                        state.ordered[id].count += parseInt(value);

                    }else{
                        state.ordered[id].count = parseInt(value);
                    }
                    state.orderedCount += parseInt(value);
                     state.orderedPrcie += parseInt(state.ordered[id].price)

                }else{
                    state.error[id]= id
                }
            }else{
                state.error[id] = id
            }
            return {
                ...state,
                ordered:state.ordered,
                error:state.error,
                orderedCount:state.orderedCount,

            };
        }
        
        case 'ON_CHANGE': {
            const { name, value} = action.target;
            state.ordered[name] = {price:value};
            if(state.error.hasOwnProperty(name)){
                delete state.error[name]
            }
            
            return{
                ...state,
                ordered:state.ordered,
            }
        }
      
        default:
            return state;
    }
};

export default pizzasListReduser;
