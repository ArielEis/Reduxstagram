function postComments(state = [], action) {
    switch (action.type){
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1),
            ];

        default:
            return state;
    }
}

function comments(state = [], action) {
    if (action.postId !== undefined){
        let copyState = {};
        for (let key in state){
            if (key !== action.postId){
                copyState[key] = state[key];
            }
        }
        console.log(action.postId);
        copyState[action.postId] = (postComments(state[action.postId], action));
        console.log(copyState);
        return copyState;
    }
    return state;
}

export default comments;