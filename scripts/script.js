let NumOfTrackers = 0;
// let addbutton = document.getElementById('addbutton');
//need a i=0 or smt then can + - the div when delete?
function add() {
  let addbutton = document.getElementById('addbutton');
    //create div try add inside
    var div = document.createElement("Div");
    div.setAttribute("class","trackbox");
    div.setAttribute("id", "trackbox"+NumOfTrackers);
    //need put into rows
    var companyid = document.createElement("label");
    companyid.innerHTML="CompanyID : "
    companyid.setAttribute("class","companyid");
    companyid.setAttribute("for","companyidinput");

    var form = document.createElement("form");
    form.setAttribute("id","form"+NumOfTrackers);
    form.setAttribute("class","form");
    
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("pattern", "^\d{10}$");
    input.setAttribute("class", "companyidinput");
    input.setAttribute("name","companyidinput");
    input.setAttribute("id", "companyid"+NumOfTrackers);
    input.setAttribute("required","");

    // X to close
    var x = document.createElement("input");
    x.setAttribute("type", "button");
    x.setAttribute("value","X");
    x.setAttribute("onclick","removeq()");
    x.setAttribute("class","x");    //flex end? make another div?

    //search button
    var search = document.createElement("input");
    search.setAttribute("type", "button");
    search.setAttribute("value", "Search");
    search.setAttribute("Class","companyidbutton");
    search.setAttribute("id", NumOfTrackers);
    search.setAttribute("onclick","getq(this.id)");

    var queueid = document.createElement("span");
    queueid.innerHTML="QueueID : "
    queueid.setAttribute("class","queueid");

    //dropdown divcontainer>buton>dropdowndiv>a
    var select = document.createElement("select");
    select.setAttribute("class", "QueueSelect");
    select.setAttribute("id","QueueSelect"+NumOfTrackers);

    //tickbox

    var checklabel = document.createElement("label");
    checklabel.innerHTML=" Show Inactive : "

    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    // document.getElementById("addtracker").insertBefore( div, addbutton);
    addbutton.parentNode.insertBefore(div, addbutton);
    const tracker = document.getElementById("trackbox"+NumOfTrackers);
    tracker.appendChild(x);
    tracker.appendChild(form);
    form.appendChild(companyid);
    form.appendChild(input);
    form.appendChild(search);
    tracker.appendChild(queueid);
    tracker.appendChild(select);
    tracker.appendChild(checklabel);
    tracker.appendChild(check);

    NumOfTrackers++;

  }

function removeq(){
    $("#addtracker").on("click", ".x",  function () {
      $(this).closest('div').remove();
      //console.log('x is pressed')
    });
} 
//hi i copied this from test.js before deleting it. you might need to do changes coz the naming is probs different -jamie
function validateForm() {
  var a = document.forms["addQueue"]["companyid"].value;  
  
  if (a == ""){
      alert("company id cannot be blank");
      return false
  }
}

const url = "http://localhost:8080";
function getq(number){
    //console.log(number);
    let compid = document.getElementById("companyid"+number).value;
    //console.log(compid);
    fetch(`${url}/company/queue?company_id=`+compid)
      .then(function(response){
        var response = response.json()
      })
      .then(function(json){
          console.log(json); //this is working normally
          //putting the array into the select
          let dropdown = document.getElementById("QueueSelect"+number);
          let options = "";
          for (let i = 0; i < json.length; i++) {
            const queue = json[i];
            const queueId = queue.queue_id;
            const active = queue.is_active;
            if (active == 0) {
                option = `<option class='inactive'>` + queueId + `</option>`;
            } else {
                option = `<option>` + queueId + `</option>`;
            }
            options += option;
          }
          dropdown.innerHTML = options;
      })
      .catch(function(error){ //here
        
      });
      
}


// hi i copied this over from test.js before deleting it made no changes. - jamie
// function showInactive () {
//   // Get the checkbox
//   var checkBox = document.getElementById("hide");
//   if (checkBox.checked == true) {
//     $(document).ready(function () {
//       $('#bt').click(function () {

//           $.getJSON(url, function (data) {
//               $.each(data, function (index, value) {
//                   if (is_active == 1) {
//                     $('#sel').append('<option value="' + value.ID + '">' + value.Name + '</option>');
//                   }else {
//                     display = "none";
//                   }
                  
//               });
//           });
//       });

//       // SHOW SELECTED VALUE.
//       $('#sel').change(function () {
//           $('#msg').text('Selected Item: ' + this.options[this.selectedIndex].text);
//       });
//   });
//   }
// }