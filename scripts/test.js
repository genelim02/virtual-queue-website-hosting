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

      // Hide by default
      <input type="checkbox" name="hide" id="hide" class="hide" onclick="showInactive" checked>
      <label for="hide">Hide Inactive</label>
      
    </div>
    `
    document.getElementById("addbutton").insertAdjacentHTML("beforebegin",  trackbox);
  console.log("new tracking")
}

//x is the X button uk close yeah 
function removeq(){
  //$(this).parent().remove()
  //$(this).closest('.trackbox').remove()  //excuse me?
  //console.log('DELETE LISTING PLEASE WORK') //???? the console.log goes thru but the thing doesnt delete wtf
  $("#addtracker").delegate(".x", "click", function () {
    $(this).closest('.trackbox').remove();
  });
  
  //nvm it works now haha
}

<<<<<<< HEAD
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
=======
function validateForm() {
  var a = document.forms["addQueue"]["companyid"].value;  
  
  if (a == ""){
      alert("company id cannot be blank");
      return false
  }
}

    
function getq(){
$(".companyidbutton").click(function(){
  let compid = $(this).siblings("input").val();
  const url = "http://localhost:8080"
  fetch(`${url}/company/queue?company_id=`+compid)
    .then(function(response){
      var response = response.json()
      .then(function(json){
        console.log(json)
      })
    })
});
//fetch(`${host}/company/queue?company_id=`+compid);
// port 8080 for company  port 3000 for customer
}
>>>>>>> 9d3f7810eec12c257244e6ee54f39a16b41bc794
