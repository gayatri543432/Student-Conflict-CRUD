const cl=console.log;

const stdContainer=document.getElementById('stdContainer')
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const email=document.getElementById('email')
const contact=document.getElementById('contact')
const stdform=document.getElementById('stdform')
const addstudent=document.getElementById('addstudent')
const updatestudent =document.getElementById('updatestudent ')





const stdsArr = [
  {
    stdId: "2qwe12-231-231wd-ew112e",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul@gmail.com",
    contact: "9876543210"
  },
  {
    stdId: "7asd45-654-xyz987-ab334k",
    firstName: "Priya",
    lastName: "Patil",
    email: "priya@gmail.com",
    contact: "9123456780"
  },
  {
    stdId: "9zxc78-111-lmn456-rt778p",
    firstName: "Amit",
    lastName: "Verma",
    email: "amit@gmail.com",
    contact: "9988776655"
  },
  {
    stdId: "5poi90-333-hjk222-ui990m",
    firstName: "Sneha",
    lastName: "Joshi",
    email: "sneha@gmail.com",
    contact: "9090909090"
  }
];


function templating(arr){
    let result=''
    arr.forEach((s,i) => {
        result+=`  <tr id="${s.stdId}">
                                        <td>${i+1}</td>
                                        <td>${s.firstName} ${s.lastName}</td>
                                        <td>${s.email}</td>
                                        <td>${s.contact}</td>
                                        <td><i class="fa-solid fa-pen-to-square fa-2x text-primary" onclick="onEditStd(this)"></i></td>
                                        <td><i class="fa-solid fa-trash-can fa-2x text-danger" onclick="onDeleteStd(this)"></i></td>
                                    </tr>  `
    });
    stdContainer.innerHTML=result
}


function onsubmit(ele){
  ele.preventDefault()

  let newstd ={
    firstName : fname.value,
    lastName : lname.value,
    email : email.value,
    contact : contact.value,
    stdId : Date.now().toString()
  }

  stdsArr.push(newstd)
  stdform.reset()
  let tr = document.createElement('tr')
  tr.id = newstd.stdId
  tr.innerHTML =`<td>${stdsArr.length}</td>
                    <td>${newstd.firstName} ${newstd.lastName}</td>
                    <td>${newstd.email}</td>
                    <td>${newstd.contact}</td>
                    <td><i class="fa-solid fa-pen-to-square fa-2x text-primary" onclick="onEditStd(this)"></i></td>
                    <td><i class="fa-solid fa-trash-can fa-2x text-danger" onclick="onDeleteStd(this)"></i></td>
                                   `

  stdContainer.append(tr)


}

templating(stdsArr)

stdform.addEventListener('submit',onsubmit)
templating(stdsArr)

let editId;
function onEditStd(ele){
  editId= ele.closest('tr').id;
  let editobj = stdsArr.find(ele => ele.stdId === editId);
  firstName.value = editobj.firstName
  lastName.value = editobj.lastName
  email.value = editobj.email
  contact.value = editobj.contact

  addstudent.classlist.add('d-none')
  updatestudent.classlist.remove('d-none')


}
