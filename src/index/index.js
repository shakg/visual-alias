const aliasesHTMLElement = document.getElementById('aliases');
const aliasesFromLocalStorage = JSON.parse(localStorage.getItem("aliases"));

if(!aliasesFromLocalStorage) throw Error;

for (let i = 0; i < aliasesFromLocalStorage.length; i++) {
    const alias = {
        "name" : aliasesFromLocalStorage[i].name, 
        "self" : aliasesFromLocalStorage[i].self
    }
    let btn = document.createElement("button");
    btn.onclick = function(){
        window.backend.run(alias.self)
    }
    btn.innerText = alias.name;
    btn.className = "aliasButton"
    aliasesHTMLElement.appendChild(btn);
}