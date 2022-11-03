     
        const myForm = document.querySelector('#my-form');
        const enteredName = document.querySelector('#name').value;
        const enteredEmail = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

myForm.addEventListener('submit', onSubmit);
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem1);

function onSubmit(e){
       
        e.preventDefault();
        const enteredName = document.querySelector('#name').value;
        const enteredEmail = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;


        console.log(enteredName);
        console.log(enteredEmail);
        console.log(password);

        localStorage.setItem('name1', enteredName);
        localStorage.setItem('Email1', enteredEmail);
        localStorage.setItem('password1', password);  


        let myobj={
            
            name2: enteredName,
            email2: enteredEmail,
            password2: password,
        }

       // var objectsEntered = document.querySelector('#email').value;
        let myobjSerialised = JSON.stringify(myobj);
        localStorage.setItem(myobj.email2, myobjSerialised);
        let myobjDeserialised = JSON.parse(localStorage.getItem(myobj))

        // for(var i=0; i<localStorage.length; i++){
        //         li.appendChild(document.createTextNode(localStorage.getItem(myobj(i))));
        // }

        var newItem = document.getElementById('name').value;
        var newItem2 = document.getElementById('email').value
        var newItem3 = document.getElementById('password').value;
        var date2 = document.getElementById('date').value;
        var time2 = document.getElementById('time').value;
var li = document.createElement('li');
li.className = 'list-group-item';
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(' '));
li.appendChild(document.createTextNode(newItem2));
li.appendChild(document.createTextNode(' '));
li.appendChild(document.createTextNode(newItem3));
li.appendChild(document.createTextNode(' '));
li.appendChild(document.createTextNode(date2));
li.appendChild(document.createTextNode(' '));
li.appendChild(document.createTextNode(time2));
itemList.appendChild(li);


var deleteBtn = document.createElement('button');
deleteBtn.style="border: 2px solid red;"
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('DELETE'));
  li.appendChild(deleteBtn);

  var editbtn = document.createElement('button');
  editbtn.style="border: 2px solid green;"
  editbtn.className = 'btn btn-danger btn-sm float-right edit';
  editbtn.appendChild(document.createTextNode('EDIT'));
  li.appendChild(editbtn);
}

function removeItem1(e){
        e.preventDefault();
        if(e.target.classList.contains('delete')){
                var li = e.target.parentElement;
                itemList.removeChild(li);
                localStorage.removeItem(myobj.email2);

        }
}

itemList.style.backgroundColor='white';