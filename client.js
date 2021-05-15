console.log('js loaded');


$(document).ready(readyNow);

function readyNow(){
    console.log('jquery loaded');

    $('#submit').on('click', addEmployee);
    //listens for submit button click and starts addEmployee function
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

    console.log(employee.firstName, employee.lastName);
    
    //takes info from inputs an employee object
    $('.input').val('');
    //clears the inputs

    let newRow = `<tr><td>${employee.firstName}</td><td>${employee.lastName}</td>
        <td>${employee.id}</td><td>${employee.title}</td><td style="text-align:right">${employee.annualSalary} </tr>`;
        //creates new row pulling info from employee object
    let tableBody = $('table tbody');

    tableBody.append(newRow);
        //adds new row to DOM
    
    console.log(employee);
    
}//end addEmployee

