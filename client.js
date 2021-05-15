console.log('js loaded');


$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');

    $('#submit').on('click', addEmployee);
    //listens for submit button click and starts addEmployee function

    $('.table').on('click', '.delete', deleteEmployee)
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

    let newRow = `<tr><td>${employee.firstName}</td><td>${employee.lastName}</td>
        <td>${employee.id}</td><td>${employee.title}</td><td style="text-align:right">$${employee.annualSalary}
        <td style="text-align:center"><button class="delete">Delete</button></td>  </tr>`;
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


function deleteEmployee() {
    console.log('delete click');

    $(this).closest(`tr`).remove();
}//deletes row


let salaryArray = [];
let annual = 0;
// console.log(salaryArray.reduce((a, b) => a + b, 0));


function total() {// total function start
    
    for (let i = 0; i < salaryArray.length; i++) {
       salaryArray[i] = +salaryArray[i];   
    }//converts the array from strings to numbers
    console.log(salaryArray.reduce((a, b) => a + b, 0));
   annual = salaryArray.reduce((a, b) => a + b, 0);
   $('#total').text(`Total Monthly:$${annual}`);


}//total function end