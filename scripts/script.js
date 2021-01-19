// const url = `postgres://jmlgolwz:d4MIUHaRtLOl2sl91VDOdkGbf5xlA-Hk@john.db.elephantsql.com:5432/jmlgolwz`
// fetch(url)
// .then(function())

let NumOfTrackers = 0;
// let addbutton = document.getElementById('addbutton');
//need a i=0 or smt then can + - the div when delete?
function add() {
  let addbutton = document.getElementById('addbutton');
    //create div try add inside
    var div = document.createElement("Div");
    div.setAttribute("class","trackbox");
    //need put into rows
    var companyid = document.createElement("span");
    companyid.innerHTML="CompanyID :"
    companyid.setAttribute("class","companyid");

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "companyid");
    input.setAttribute("class", "input")

    var x = document.createElement("input");
    x.setAttribute("type", "button");
    x.setAttribute("value","X");
    x.setAttribute("onclick","removeq()");
    x.setAttribute("class","x");    //flex end? make another div?

    //search button
    var search = document.createElement("input");
    search.setAttribute("type", "button");
    search.setAttribute("value", "Search");
    search.setAttribute("Class","search");
    search.setAttribute("onclick","searchCompany()");

    //line break idk
    var linebreak = document.createElement("br");

    var queueid = document.createElement("span");
    queueid.innerHTML="QueueID :"
    queueid.setAttribute("class","queueid");

    //dropdown divcontainer>buton>dropdowndiv>a

    //tickbox
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    // document.getElementById("addtracker").insertBefore( div, addbutton);
    addbutton.parentNode.insertBefore(div, addbutton);
    const tracker = document.getElementsByClassName("trackbox")[NumOfTrackers]
    tracker.appendChild(x);
    tracker.appendChild(companyid);
    tracker.appendChild(input);
    tracker.appendChild(search);
    tracker.appendChild(linebreak);
    tracker.appendChild(queueid);
    tracker.appendChild(check);

    NumOfTrackers++;
    
  }
  function removeq(){
    // .removeChild()   ??? am i supposed to appendchild tho um
    // get numoftrackers and then -- at end i think
  }


