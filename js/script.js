
function newItem(){

  //adds a new item to the list of items
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  //crosses out an item
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function () {
    crossOut();
  });

  //adds the delete button "X"
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", function() {
    deleteListItem();
  });

  //the delete item function
  function deleteListItem(){
    li.addClass("delete");
  }
}

//reorders the items
$("#list").sortable();
