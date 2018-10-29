import SocketValues from "../../constants/SocketValues";

const {EVENTS} = SocketValues;
const initialState = {
    isConnected: false,
    messages: [],
    leaderboard: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    console.log("TYPE: ", type, "PAYLOAD: ", payload);
    switch (type) {
        case EVENTS.ROOM_CONNECTED:
            return {...state, ...payload};
        case EVENTS.CONNECTED:
            return {...state, isConnected: true};
        case EVENTS.DISCONNECTED:
            return {...state, isConnected: false};
        case EVENTS.USER_DISCONNECTED:
            return state;
        case EVENTS.ANOTHER_USER_CONNECTED:
            return state;
        case EVENTS.ROUND_START:
            return {...state, ...payload};
        case EVENTS.TELL:
            return state;
        case EVENTS.TELL_ANSWER:
            return {
                ...state,
                answer: payload
            };
        case EVENTS.RIGHT_ANSWER:
            return state;
        case EVENTS.SAY:
            return state;
        case EVENTS.LEADERBOARD_UPDATE:
            return state;
        default:
            return state;
    }
}
