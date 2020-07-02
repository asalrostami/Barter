export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const checkValidity = (value) => {
    let isValid = true;
    isValid = value.trim() !== '' && isValid;
    return isValid;
} 