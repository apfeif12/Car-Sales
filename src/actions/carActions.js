export const ADD_PART = "ADD_PART";

export const addPart = (name) => {
    return({
        type: ADD_PART, 
        payload: name
    });
}