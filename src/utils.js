const removeDupsFromArray = (arrry) => {
    return [...new Set(arrry)]
}

const reverString = (input) => {
    let newEmptyString = "";
    input = input.toString();
    for(let i = input.length - 1; i >= 0; i--) {
        newEmptyString += input[i]
    }
    return newEmptyString;
}

module.exports = {removeDupsFromArray, reverString}