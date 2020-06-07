// const initialState = {
//     score : 0
// }

export const updateNewScore = ( score ) => {
    return {
        type : 'UPDATE_SCORE',
        payload : score,
    }
}

export const bonusScore = ( score ) => {
    return {
        type : 'BONUS_SCORE',
        payload : score,
    }
}