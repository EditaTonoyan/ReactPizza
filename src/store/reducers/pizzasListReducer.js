const initialState = {
    slim: {},
    size: {},
    count: {},
};
const pizzasListReduser = (state = initialState, action) => {
    console.log("slim", state.slim);
    // console.log("size", state.size);
    switch (action.type) {
        case 'ADD_TO_CHART': {
            const { name } = action.target;
            console.log(name);
            const id = name.replace('count_', ' ');
            const count1 = state.count;

            count1.hasOwnProperty(id) ? count1[id] += 1 : count1[id] = 1;

            return {
                ...state,
                count: count1,
            };
        }
        case 'ON_CHANGE': {
            const { name, value } = action.target;
            const slim1 = state.slim;
            const size1 = state.size;
            const id = name.includes('slim_') ? name.replace('slim_', ' ') : name.replace('size_', ' ');
            slim1[id] = value;
            size1[id] = value;
            console.log(slim1,'slim1');
            console.log(slim1,'size1');

            return {
                ...state,
                slim: slim1,
                size: size1,
            };
        }

        default:
            return state;
    }
};

export default pizzasListReduser;
