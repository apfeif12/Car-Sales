export const ADD_PART = "ADD_PART";
export const REMOVE_PART = "REMOVE_PART";

export const addPart = (feature) => {
    return({
        type: ADD_PART, 
        payload: feature
    });
}

export const removePart = (feature) => {
    return({
        type: REMOVE_PART, 
        payload: feature
    });
}