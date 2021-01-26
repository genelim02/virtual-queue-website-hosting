function add(){
    
    let trackbox = `
    <div class="trackbox">
      <button class="x" onclick="removeq()">X</button>
      <form name="addQueue" action="get">
        <label for="companyid">Company ID :</label>
        <input type="text" class='companyid' >
        <button type="button" onclick='getq()' class='companyidbutton'>Search</button>
        <br>        
      </form>

      <label for="queueid">Queue ID :</label>
      <select name="queueid" class="queueid">
        <option value="1">extracted queue id appears here</option>
      </select>

      <label for="hide">Hide Inactive</label>
      <input type="checkbox" name="hide" class="hide">
    </div>
    `
    document.getElementById("addbutton").insertAdjacentHTML("beforebegin",  trackbox);
  console.log("new tracking")
}

//x is the X button uk close yeah 
function removeq(){
  
  $("#addtracker").delegate(".x", "click", function () {
    $(this).closest('.trackbox').remove();
  });
  
}

function validateForm() {
  var a = document.forms["addQueue"]["companyid"].value;  
  
  if (a == ""){
      alert("company id cannot be blank");
      return false
  }
}

    
// function getq(){
// $(".companyidbutton").click(function(){
//   let compid = $(this).siblings("input").val();
//   const url = "http://localhost:8080"
//   fetch(`${url}/company/queue?company_id=`+compid)
//     .then(function(response){
//       var response = response.json()
//       .then(function(json){
//         console.log(json)
//       })
//     })
// });
//fetch(`${host}/company/queue?company_id=`+compid);
// port 8080 for company  port 3000 for customer
//}

// var compid;
// const url = "http://localhost:8080";
// function getq(){
//     compid = $(this).siblings("input").val();
//     fetch(`${url}/company/queue?company_id=`+compid)
//       .then(function(response){
//         var response = response.json()
//         .then(function(json){
//           console.log(json)
//         })
//       });
// }