function posts(state = [], action) {
    switch(action.type){
        case 'INCREMENT_LIKES':
            const i = action.index;
            // let object = {...state[i], likes: state[i].likes + 1};
            return [
                    ...state.slice(0, i),
                    {
                        code: state[i].code,
                        caption: state[i].caption,
                        id: state[i].id,
                        display_src: state[i].display_src,
                        likes: state[i].likes + 1,
                    },
                    ...state.slice(i + 1),
            ]

        default:
            return state;
    }
}

export default posts;