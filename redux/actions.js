export const socketEmit = (message, data) => ({
    type: "socket",
    payload: {
        message,
        data
    }
});