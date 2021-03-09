// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">February, 28, 2021</span>
//    <h1>Gabi Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// Use this object for the component you created.

function myHeader(date,title,temp){
    // creating elements
    let mainDiv=document.createElement("div")
    let mainDate=document.createElement("span")
    let mainTitle=document.createElement("h1")
    let mainTemp=document.createElement("span")
    //appending
    

    mainDiv.appendChild(mainDate)
    mainDiv.appendChild(mainTitle)
    mainDiv.appendChild(mainTemp)
    
    mainDate.textContent=date
    mainTitle.textContent=title
    mainTemp.textContent=temp

    //adding class
    mainDiv.classList.add(".headercontainer")
    

return mainDiv

    }

// function invocation
console.log(myHeader("date","Gabi Times","98°")




















