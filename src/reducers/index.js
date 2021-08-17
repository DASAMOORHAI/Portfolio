const initialState = {
    startConfig: {lang: '', style: ''}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CONFIG_SET':
            return {
                ...state,
                startConfig: {lang: action.payload.lang, style: action.payload.style}
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;