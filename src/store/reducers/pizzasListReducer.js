const initialState = {
    ordered: {},
    error: {},
    orderedCount: 0,
    orderedPrcie: 0,
};
const pizzasListReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'getPizzas': {
            return {
                ...state,
                pizzas: action.data,
            };
        }

        case 'ADD_TO_CHART': {
            const { id, value } = action.target;
            const orderedId = state.ordered[id];

            if (orderedId) {
                if (orderedId.price) {
                    if (orderedId.count) {
                        orderedId.count += parseInt(value);
                    } else {
                        orderedId.count = parseInt(value);
                    }
                    state.orderedCount += parseInt(value);
                    state.orderedPrcie += parseInt(orderedId.price);
                } else {
                    state.error[id] = id;
                }
            } else {
                state.error[id] = id;
            }

            return {
                ...state,
                ordered: state.ordered,
                error: state.error,
                orderedCount: state.orderedCount,
            };
        }

        case 'ON_CHANGE': {
            const { name, value } = action.target;
            // istead of typeof state.ordered[name] !== 'undefined' you can write if (state.ordered[name])
            if (typeof state.ordered[name] !== 'undefined') {
                if (state.ordered[name].hasOwnProperty('count')) {
                    state.orderedCount = state.orderedCount - state.ordered[name].count;
                    state.orderedPrcie = state.orderedPrcie - state.ordered[name].price * state.ordered[name].count;
                }
            }

            state.ordered[name] = { price: value };
            if (state.error.hasOwnProperty(name)) {
                delete state.error[name];
            }

            return {
                ...state,
                ordered: state.ordered,
                orderedCount: state.orderedCount,
            };
        }

        case 'CHANGE_COUNT': {
            const { name, value } = action.target;
            if (value === 'plus') {
                state.ordered[name].count = state.ordered[name].count + 1;
                state.orderedCount = state.orderedCount + 1;
                state.orderedPrcie = parseInt(state.orderedPrcie) + parseInt(state.ordered[name].price);
            } else if (value === 'minus') {
                if (state.ordered[name].count > 1) {
                    state.ordered[name].count -= 1;

                    state.orderedCount = state.orderedCount - 1;
                    state.orderedPrcie = parseInt(state.orderedPrcie) - parseInt(state.ordered[name].price);
                }
            }
            return {
                ...state,
                ordered: state.ordered,
            };
        }

        case 'DELETE_PIZZA': {
            const { name } = action.target;
            const { [name]: remove, ...rest } = state.ordered;
            state.orderedCount = state.orderedCount - state.ordered[name].count;
            state.orderedPrcie = state.orderedPrcie - state.ordered[name].price * state.ordered[name].count;
            return {
                ...state,
                ordered: rest,
            };
        }

        case 'DELETE_ALL': {
            return {
                ...state,
                orderedCount: 0,
                orderedPrcie: 0,
                ordered: {},
            };
        }

        case 'RESET_PIZZAS_LIST_DATA': {
            return {
                ...initialState,
            };
        }
        default:
            return state;
    }
};

export default pizzasListReduser;
