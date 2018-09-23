import SocketValues from "../../constants/SocketValues";

const {EVENTS} = SocketValues;
const initialState = {
    messages: [],
    leaderboard: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case EVENTS.CONNECTED:
            return {...payload};
        case EVENTS.USER_DISCONNECTED:
            return state;
        case EVENTS.ANOTHER_USER_CONNECTED:
            return state;
        case EVENTS.ROUND_START:
            return {...payload};
        case EVENTS.TELL:
            console.log("tell", payload);
            return state;
        case EVENTS.TELL_ANSWER:
            console.log("tell_answer", payload);
            return state;
        case EVENTS.RIGHT_ANSWER:
            console.log("tell_answer", payload);
            return state;
        case EVENTS.SAY:
            console.log("say", payload);
            return state;
        case EVENTS.LEADERBOARD_UPDATE:
            return state;
        default:
            return state;
    }
}
