const ps = require("prompt-sync")({ sigint: true });
function createAcontact(){
    const contact_array = [];
    // take input
    let conatact_input = ps(" enter contact details ");
    while(conatact_input){
        contact_array.push(conatact_input);
        conatact_input = ps(" enter contact details ");
    }
    return contact_array;
}
createAcontact();