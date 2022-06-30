function addAnotherListener(typeOfEvent,callBack){
    var eventToHappen = {
        eventType:"keypress",
        key:"p",
        duration: 2
    }

    if(eventToHappen.eventType==typeOfEvent){
        callBack(eventToHappen);
    }

}

addAnotherListener("keypress",function(event){
    console.log(event);
})
