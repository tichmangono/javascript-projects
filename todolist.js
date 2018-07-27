// Grab text input on Submit
//function onSubmit('click'){
var form = document.getElementById('addForm');
var items = document.getElementById('items');
console.log(form, items)

// Listen to the submit button in the addForm
form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);

// Add an items
function addItem(e) {
  e.preventDefault();
  // Get input value
  var newItem= document.getElementById('inputItem').value;

    if (newItem){
        //Create new element li element
        var li = document.createElement('li');
        li.className = 'list-group-item'
        console.log(li);
        //Add Text Node with input value
        li.appendChild(document.createTextNode(newItem));
        //Add the delete button
        var deleteBtn = document.createElement('button');
        // Add classes to delete button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
        // Append text Node
        deleteBtn.appendChild(document.createTextNode('X'))
        // Append button to li
        li.appendChild(deleteBtn)
        //Append li to list

        items.appendChild(li)
        document.getElementById('inputItem').value =""
    } else {
      alert("Please insert a value")
    }
    }

console.log(items)

function removeItem(e){
  if (e.target.classList.contains('delete')) {
    if(confirm("Are you sure you want to delete this task?"))
      var li = e.target.parentElement;
      items.removeChild(li);
  }
}


// Grab the input from the search button
var searchTxt =   document.getElementById('inputSearch');
var searchBtn = document.getElementById('btnSearch');
//console.log(search)

// add an event listener to search
searchTxt.addEventListener('keyup', searchItem);
searchBtn.addEventListener('click', searchItem);

// function to search items
function searchItem(e){
    var keyword = searchTxt.value.toLowerCase(); //convert to lower
    //console.log(items.childNodes);
    //var children = items.childNodes;
    //console.log(children.length);

    var listItems = items.getElementsByTagName('li');

    Array.from(listItems).forEach(function(itm){
      var itmName = itm.firstChild.textContent;
      console.log(itmName);
        if (itmName.toLowerCase().indexOf(keyword) != -1){
          //Let it show if it matches
          itm.style.display ='block'
          //otherwise hide it
        } else {
          itm.style.display = 'none'
        }
    });
  }
