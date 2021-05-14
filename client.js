console.log('js loaded');


$(document).ready(readyNow);

function readyNow(){
    console.log('jquery loaded');

    $('#submit').on('click', addEmployee);
}

function addEmployee() {
    console.log('addEmployee click');
    
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    }

    console.log(employee);
    
}