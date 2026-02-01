let btn = document.querySelector("#input-btn")
let ul_list = document.querySelector("#ul_list")
let myLeads = [ ]
let inputEl = document.querySelector("#input-el")
let localStorageForMyLead = localStorage.getItem("myLeads")
let clear_btn = document.querySelector("#clear-btn")
let tab_btn = document.querySelector("#tab-btn")    

if(localStorageForMyLead){
        myLeads = JSON.parse(localStorageForMyLead)
        render(myLeads)
    }

btn.addEventListener("click", ()=>{
    myLeads.push(inputEl.value )
    render(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
})

function render(leads){
    let listItems =""
        for( let i = 0 ; i < leads.length ; i++){
        
        // listItems += "<li> <a target='_blank' href='"+ myLeads[i] +"'>"  + myLeads[i] +  " </a></li>"
        listItems += `<li> 

                          <a target='_blank' href='${leads[i]}'> ${leads[i]} </a>

                      </li>`
        // const li_el = document.createElement("li")
        // li_el.innerText = myLeads[i]
        // ul_list.append(li_el)
    }
    ul_list.innerHTML = listItems

}

//clear btn functionality

clear_btn.addEventListener("dblclick", ()=>{
    localStorage.clear()
    myLeads = []
    render(myLeads)
    

})
//tab btn functionality

tab_btn.addEventListener("click",()=>{


    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    myLeads.push(tabs[0].url)
    render(myLeads)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    })
})