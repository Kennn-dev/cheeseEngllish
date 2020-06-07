const scoreReducer = (state = 0 , action) =>{ 
    switch (action.type) {
        case 'UPDATE_SCORE': {
                const newScore = action.payload;
                state = newScore;
                return state ;
            }
        case 'BONUS_SCORE': {
                const newScore = action.payload;
                state = newScore + 10;
                return state;
            }
           
    
        default:
            return state;
    }
}

export default scoreReducer;