const cl=console.log;

const stdContainer=document.getElementById('stdContainer')

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

templating(stdsArr)

function OnUpdate(){
  let UPDATE_ID=editId
  let UPDATED_OBJ={
    firstName:firstName.value,
    lastName:lastName.value,
    email:email.value,
    contact:contact.value,
    stdId:UPDATE_ID
  }
stdform.reset()
let getIndex = stdsArr.findIndex(std=>{
  return std.stdId === UPDATE_ID
})

stdsArr[getIndex] = UPDATED_OBJ

let tr = document.getElementById(UPDATE_ID).children

r[1].innerText=`${UPDATED_OBJ.firstName}  ${UPDATED_OBJ.lastName}`
tr[2].innerText=`${UPDATED_OBJ.email}  `
tr[3].innerText=`${UPDATED_OBJ.contact} ` 


addSaddstudent.classlist.remove('d-none')
updatestudent.classlist.add('d-none')

}
updatestudent.addEventListener('click', onsubmit)