
function setUf(){
    const ufSelect = document.querySelector("select[name=state]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=>{ return res.json()}).then((states)=>{
        for(const state of states){
            ufSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`
        }
    })
}
setUf()



function getCity(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")



    const ufValue = event.target.value
    const indexOfSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/microrregioes`
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled= true

    fetch(url)
    .then((res)=>{ return res.json()})
    .then((cities)=>{
        
        for(const city of cities){
            citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`
        }
        citySelect.disabled = false
    })

}





document
    .querySelector("select[name=state]")
    .addEventListener("change",getCity)
 




const itemsCollect = document.querySelectorAll(".items-grid li")  
  
const collectedItems = document.querySelector("input[name=items]")

for (const item of itemsCollect){
    item.addEventListener("click",handleSelected)
}


let selectedItems = []


function handleSelected(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    const alreadySelected = selectedItems.findIndex((item)=>{
      const itemFound = item == itemId
      return itemFound
    })

    if(alreadySelected >= 0){
        const filterItems = selectedItems.filter((item)=>{
            const itemDifferent = item != itemId
            return itemDifferent
        })

        selectedItems = filterItems

    }else{
        selectedItems.push(itemId)
    }
    

 
    collectedItems.value = selectedItems

}






















