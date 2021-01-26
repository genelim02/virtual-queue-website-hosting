function add(){
    
    let trackbox = `
    <div class="trackbox">
      <button class="x" onclick="removeq()">X</button>
      <form action="get">
        <label for="companyid">Company ID :</label>
        <input type="text" class="companyid">
        <button type="submit">Search</button>
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