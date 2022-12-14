
//cd /home/ishak/Desktop/mav-sdk/install/bin && ./mavsdk_server
function addAlias(){
    const aliasesFromLocalStorage = JSON.parse(localStorage.getItem("aliases"));

    if(!aliasesFromLocalStorage){
        localStorage.setItem("aliases", '[{}]')
        aliasesFromLocalStorage = JSON.parse(localStorage.getItem("aliases"));
    }
    const _name = document.getElementById("aliasName").value;
    const _self = document.getElementById("aliasSelf").value;
    const _aliasToAdd = {
        "name" : _name,
        "self" : _self
    };
    aliasesFromLocalStorage.push(_aliasToAdd);
    localStorage.setItem("aliases", JSON.stringify(aliasesFromLocalStorage))
    document.getElementById("aliasName").value = "";
    document.getElementById("aliasSelf").value = "";
}
