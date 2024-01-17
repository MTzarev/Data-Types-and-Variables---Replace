function rightPlace(stringOne, charOne, stringTwo) {
    let res = stringOne.replace("_", charOne);
    if (res === stringTwo) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'i', 'String')