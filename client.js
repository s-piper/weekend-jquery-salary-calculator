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
    //takes info from inputs an employee object
    console.log(employee);
    
}//end addEmployee