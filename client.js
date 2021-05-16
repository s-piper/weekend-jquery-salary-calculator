console.log('js loaded');


$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');

    $('#submit').on('click', addEmployee);
    //listens for submit button click and starts addEmployee function

    $('.table').on('click', '#delete', deleteEmployee)
    //dynamic listener for delete button click on table

}

function addEmployee() {
    //start addEmployee function
    console.log('addEmployee click');

    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    }

    salaryArray.push(employee.annualSalary);
    //pushes annualSalary to salaryArray to store 


    console.log(employee.firstName, employee.lastName);

    //takes info from inputs an employee object
    $('.input').val('');
    //clears the inputs

    // let salObj = employee.annualSalary;

    let newRow = `<tr class = "employee">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td class = "delSal" style="text-align:right">${employee.annualSalary.toLocaleString({
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}</td>
        <td style="text-align:center"><button class="btn btn-outline-danger btn-sm" id="delete">Delete</button></td> </tr>`;
    //creates new row pulling info from employee object
    //also makes the delete button
    let tableBody = $('table tbody');

    tableBody.append(newRow);
    //adds new row to DOM

    console.log(employee);



    //let total = employee.annualSalary;
    //console.log(total);

    total();
    //calls total function

}//end addEmployee



// let delSal = {};
function deleteEmployee() {
    console.log('delete click');
    
    let subSal = Number($(this).closest(`.employee`).children('.delSal').text());
    //pulls the data from html
    console.log(subSal);
    let index = salaryArray.indexOf(subSal);
    salaryArray.splice(index, 1);
    //finds index and removes it from the salaryArray
    console.log(index);
    
  
    // deleteSalary(subSal);
    $(this).closest(`tr`).remove();
    // console.log(`check` .JSON.stringify(salObj));
    total();
    //reruns total function
}//deletes row

// // function deleteSalary() {
//     let index = salaryArray.indexOf(subSal);
//         if (index > -1){
//             salaryArray.splice(index, 1);
//         }
// }


let salaryArray = [];
let annual = 0;
let monthly = 0
// console.log(salaryArray.reduce((a, b) => a + b, 0));


function total() {// total function start
    
    for (let i = 0; i < salaryArray.length; i++) {
       salaryArray[i] = +salaryArray[i];   
    }//converts the array from strings to numbers
    console.log(salaryArray.reduce((a, b) => a + b, 0));
   annual = salaryArray.reduce((a, b) => a + b, 0);
   //adds array values
   monthly = parseInt(annual/12);
   //breaks it down to monthly
   if (monthly>20000) {
       $('#total').addClass('warning');
   }
   $('#total').text(`Total Monthly:$${monthly.toLocaleString({
        minimumFractionDigits:2,
        maximumFractionDigits:2,
    })}`);
//    $('#total').text(`Total Monthly: ${monthly}`).toLocaleString();
   //adds to DOM
}//total function end