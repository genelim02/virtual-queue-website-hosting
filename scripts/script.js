let NumOfTrackers = 0;

//need a i=0 or smt then can + - the div when delete?
function add() {
    //create div try add inside
    var div = document.createElement("Div");
    div.setAttribute("class","trackbox");

    var companyid = document.createElement("P");
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

    document.getElementById("addtracker").appendChild(div);
    document.getElementsByClassName("trackbox")[NumOfTrackers].appendChild(x);
    document.getElementsByClassName("trackbox")[NumOfTrackers].appendChild(companyid);
    document.getElementsByClassName("trackbox")[NumOfTrackers].appendChild(input);

    NumOfTrackers++;
    
  }
  function removeq(){
    // .removeChild()   ??? am i supposed to appendchild tho um
    // get numoftrackers and then -- at end i think
  }