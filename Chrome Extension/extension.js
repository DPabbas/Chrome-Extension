
// step 1: make save button function
// step 2: making var - instead let with const
// step 3: push the value to the myLeads ( www.awesomelead.com)
// step 4: get the dynamic value of input-el (not like step 3)
// we should use .value trick (myLeads.push(inputEl.value))
// step 5: make for loop in myleads array
// step 6: make ul in html - grap it in a const var
// step 7: put item in ul with ulEl.textcontent
// step 8: make li html items with js (ulEl.innerHtml)
// step 9: make the li in other way
// step 10: improve the app
// step 11: make myLeads to a dunamic array
// step 12: clear the input value
// step 13: put li to the <a> tag
// step 14: make a shorter (Template Literal)
// step 15: upload the extension
// step 16: make localstorage
// step 17: save myLeads to the localstorage
// step 18: json.parse() - storge in var
// step 19: check truthly 
// step 20: delete btn
// step 21: delete function
// step 22: develop: instead renderLead we use render / give the render function myLeads as an perameters
// step 23: save tab
// step 24: get chrome url to save 


/*16*/

//localStorage.setItem("myLead", "www.google.com")

//console.log(localStorage.getItem("myLead"))




/*11*/ let myLeads = []

/*2*/// const myLeads = ["www.road.com","www.chrome.com","www.google.com"]

/*2*/ const inputEl  = document.getElementById("input-el")

/*2*/ const inputBtn = document.getElementById("input-btn")

/*6*/ const ulEl = document.getElementById("ul-el")

/*20*/ const deleteBtn = document.getElementById("delete-btn")

/*23*/ const tabBtn = document.getElementById("save-btn")

/*18*/const leadsFormLocalStorage = JSON.parse (localStorage.getItem ("myLeads"))

        
/*19*/
    if(leadsFormLocalStorage){

        myLeads = leadsFormLocalStorage 

        render(myLeads)
    }


/*23*/
    /* const tabs = [
        {URL:"https://www.linkedin.com/in/per"}
    ] */

    tabBtn.addEventListener( "click", function(){
        
        /*24*/ chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
            
            myLeads.push(tabs[0].url)
            localStorage.setItem( "myLeads", JSON.stringify( myLeads ))
            render(myLeads)

        })
    })


    /*11*/function render (leads){

        /*10*/ let listItem = ""

        /*4*/ for( let i = 0; i < leads.length; i++)
        
            {

                //here we have three ways to show the result

                /*7*///ulEl.textContent += myLeads[i] + " "

                /*8*///ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

                /*9*//*const li = document.createElement("li")
                    
                    li.textContent = myLeads[i] 

                    ulEl.append(li)
                */
                /*10*/// listItem += "<li>" + myLeads[i] + "</li>"

                /*13*/// listItem += "<li> <a target='-blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

                /*14*/ listItem += `
                    <li> 
                        <a target='_blank' href='${myLeads[i]}'>
                            ${myLeads[i]}
                        </a>
                    </li>
                ` 
            }

        /*10*/ ulEl.innerHTML = listItem
    }

/*20*/
    deleteBtn.addEventListener( "dblclick", function(){

        localStorage.clear()
        myLeads = []
        render(myLeads)
        
    })


    /*1*/inputBtn.addEventListener("click" , function ()
    {
        /*3*///myLeads.push("www.awesomelead.com")

        /*4*/myLeads.push(inputEl.value)

        /*4*///console.log(myLeads)

        /*12*/ inputEl.value = ""

        /*17*/
            localStorage.setItem ( "myLeads", JSON.stringify ( myLeads ) )

        /*11*/ render(myLeads)

        /*17*/
            //console.log(localStorage.getItem("myLeads"))


    })




