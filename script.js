const calculateSalary = (salary) => salary + (salary * 25 / 100);
let EmployeeName = prompt("Enter Your Name")

let employeeSalary = Number(prompt("Enter Basic Salary:"));

if (!isNaN(employeeSalary) && employeeSalary > 0) {
    let totalSalary = calculateSalary(employeeSalary);

    console.log("Employee Name : ",EmployeeName,"Employee Salary: ", employeeSalary);
    console.log("Allowance (10%):", employeeSalary * 0.25);
    console.log("Net Salary:", totalSalary);
} else {
    console.log("Invalid input! Enter salary greater than 0.");
}

 