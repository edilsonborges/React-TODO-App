const INITIAL_STATE = {
        description: 'Read book',
        list: [{
            _id: 1,
            description: 'Pay bills',
            done: true
        }, {
            _id: 2,
            description: 'Meeting',
            done: false
        }, {
            _id: 3,
            description: 'Medic',
            done: false
        }]
    }

    export default (state = INITIAL_STATE, action) => {
        switch(action.type) {
            case 'DESCRIPTION_CHANGED':
                return { ...state, description: action.payload }
            case 'TODO_SEARCHED':
                return { ...state, list: action.payload.data }
            default:
                return state
        }
    }