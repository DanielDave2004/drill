const content=document.querySelector("#content");

window.addEventListener('load', () => {
    getUsers();
})

function getUsers() {
    let html=""
    //FETCH API
    fetch('https://api.sampleapis.com/rickandmorty/characters',{mode: 'cors'})
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=> {
        console.log(data);
        data.forEach(element=>{
            html+=`<li> ${element.name} ${element.status}${element.species} ${element.type}${element.gender} ${element.origin}<img src=${element.origin}></li>`
        })
        content.innerHTML=html;
    })
    .catch(error=>{
        console.log(error);
    })

}
