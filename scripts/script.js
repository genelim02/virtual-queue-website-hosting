// import { GoogleCharts } from require('google-charts')
// Vue.prototype.$GoogleCharts = GoogleCharts;
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
    check.setAttribute("class", "toggle")
    check.setAttribute("id", "check"+NumOfTrackers);
    check.setAttribute("checked","");
    check.setAttribute("onclick", "showInactive(this.id)")

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
function validateInput() {
  var a = document.getElementsByClassName("companyidinput").value;  
  
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
      
      .then(function(json){
        if(json.code == "INVALID_QUERY_STRING"){
          alert("Invalid Company ID Format")
        } 
        else if (json.length == 0){
          alert("Company ID Does Not Exist")
        }
          console.log(json); //this is working normally
          //putting the array into the select
          let dropdown = document.getElementById("QueueSelect"+number);
          
          let options = "";
          inactiveq = [];
          for (let i = 0; i < json.length; i++) {
            const queue = json[i];
            const queueId = queue.queue_id;
            const active = queue.is_active;
            let option;
            if (active == 0){
                
                 option = `<option class='inactive'>` + queueId + `</option>`;
            } else {
                
                option = `<option>` + queueId + `</option>`;
            }
            options += option
          }
          dropdown.innerHTML = options;
          
      })
      
    })
    .catch(function(error){
      console.log(error)
      if (error = "TypeError: Failed to fetch"){
        alert("Backend Connection not Established.");
      }
    })      
}

function showInactive(id){  //now working
  var x = document.getElementById(id).checked;
  var option = document.getElementsByClassName("inactive");
  
  if(x == true){
    console.log(true);
    for(let i=0; i < option.length; i++){
      option[i].style.display = "block"
    }
  }else{
    console.log(false);
    for(let i=0; i < option.length; i++){
      option[i].style.display = "none"
    }
  }

}
window.onload = function(){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  }


function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

// })
// // addGraph()      
// }

// var ctx = document.getElementById("line-chart");
// var lineChart = new Chart (ctx, {
// type: 'line',
// data: {
// labels: ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
// datasets: [{
//   label: "2015",
//   data: [10,8,6,5,12,8,16,17,6,7,6,10]
// }]
// }
// })
// new Chart(ctx).Line(data);
// var lineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
//     datasets: [""]
//   },
//   options
// });

// function addGraph(){
//   var myLineChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: options
//   });
// }