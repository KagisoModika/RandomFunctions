function removeProperty(obj, prop) {
    if (obj.hasOwnProperty('prop')) {
        delete obj.prop;

        return true;
    } else {
        return false;
    }
}

const obj = {
    prop: "Something!!!"
};

removeProperty(obj, obj.prop2something);