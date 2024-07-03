export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "Jonathan",
    lastName: "Amos",
    age: 24,
    location: "Kampala, Uganda",
  },
  {
    firstName: "Hunter",
    lastName: "Ogwal",
    age: 25,
    location: "Athens, Greece",
  }
];

export const Table = (students: Student[]) => {
  const table = document.createElement('table');
  const header = document.createElement('tr');
  header.insertAdjacentHTML("beforeend", "<th>Firstname</th>");
  header.insertAdjacentHTML("beforeend", "<th>Location</th>");
  table.appendChild(header);

  students.forEach((student) => {
    const row = document.createElement('tr');
    row.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    row.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    table.appendChild(row);
  });

  document.body.appendChild(table);
};

Table(studentsList);
