var tabs = document.getElementsByClassName("tab")
    

for(var tab of tabs){
    tab.style.display = "none"
}


function displayTab(id){
   
   for(var tab of tabs){
    tab.style.display = "none"
   }
   
    document.getElementById(id).style.display = "block"
}


var buttons = document.querySelectorAll("button")
for(var button of buttons){
    button.addEventListener("click", function(){
        //nuima klase nuo visu
        for(var x of buttons){
            x.classList.remove("selected")
        }
        this.classList.add("selected")
    })
}