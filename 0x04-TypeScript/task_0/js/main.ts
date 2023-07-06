interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// student objects
const firstStudent: Student = {
	firstName: "Sylvia",
	lastName: "Jitti",
	age:24,
	location: "Yaounde"
}

const secondStudent: Student = {
	firstName: "Joy",
	lastName: "Lesley",
	age:23,
	location: "Douala"
}

// array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;


// row for each student 
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})