function counter(state, action) {
    if(!state)
        state = {counter: 0};
    switch(action.type){
        case "increase":
    
            return {...state, counter: state.counter+1};
        case "decrease":
    
            return {...state, counter: state.counter-1};
        default: 
            return state;
    }

}

export default counter;