
// step 1: make save button function
// step 2: making var - instead let with const
// step 3: push the value to the myLeads ( www.awesomelead.com)
// step 4: get the dynamic value of input-el (not like step 3)
// we should use .value trick (myLeads.push(inputEl.value))
// step 5: make for loop in myleads array
// step 6: make ul in html - grap it in a const var
// step 7: put item in ul with ulEl.textcontent
// step 8: make li html items with js (ulEl.innerHtml)



/*2*/ const myLeads = ["www.road.com","www.chrome.com","www.google.com"]

/*2*/ const inputEl  = document.getElementById("input-el")

/*2*/ const inputBtn = document.getElementById("input-btn")

/*6*/ const ulEl = document.getElementById("ul-el")

    /*1*/inputBtn.addEventListener("click" , function ()
    {
        /*3*///myLeads.push("www.awesomelead.com")

        /*4*/myLeads.push(inputEl.value)

        console.log(myLeads)

    })


/*4*/ for( let i = 0; i < myLeads.length; i++){

    /*7*///ulEl.textContent += myLeads[i] + " "

    /*8*/ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

}


