let studentNameInput = document.getElementById("studentName");
let rollNumberInput = document.getElementById("rollNumber");
let addStudentBtn = document.getElementById("addStudentBtn");
let studentList = document.getElementById("studentList");
let deleteBtn = document.getElementById("deleteBtn");
let selectedstudent = null;

addStudentBtn.addEventListener("click", () => {
  let name = studentNameInput.value;
  let roll = rollNumberInput.value;

  if (name === "" || roll === "") {
    alert("Please enter student details");
    return;
  }

  const li = document.createElement("li");
  li.textContent = ` Roll no : ${roll} - Name : ${name} `;
  li.className = "list-item";

  li.addEventListener("click", () => {
    if (selectedstudent) {
      selectedstudent.classList.remove("selected");
    }
    li.classList.add("selected");
    selectedstudent = li;
    console.log(selectedstudent);
  });

  studentList.appendChild(li);
  studentNameInput.value = "";
  rollNumberInput.value = "";

  deleteBtn.addEventListener("click", () => {
    if (selectedstudent) {
      selectedstudent.remove();
      selectedstudent = null;
      return;
    }
    alert("please select a student");
  });
});
