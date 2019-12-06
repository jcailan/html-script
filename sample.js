function getElementsByIdAndClassName(sId, sClassName) {
    var aResult = [];
    var aElements = document.getElementsByClassName(sClassName);
    for (var i=0; i < aElements.length; i++) {
        if (aElements[i].id === sId) {
            aResult.push(aElements[i]);
        }
    }
    return aResult;
}

getElementsByIdAndClassName("edit-bg", "ep-enhanced")
