import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  showNewForm = false;
  showEditForm = false;
  editingIndex: number | null = null;

  Students = [
    {
      rollNo: 1, name: 'Alice', status: "present"
    },
    {
      rollNo: 2, name: 'Bob', status: "absent"
    },
    {
      rollNo: 3, name: 'Charlie', status: "present"
    }
  ]

  newStudentRollNo = 0;
  newStudentName = '';
  newStudentStatus = '';

  editStudentRollNo = 0;
  editStudentName = '';
  editStudentStatus = '';

  toggleNewForm() {
    this.showNewForm = !this.showNewForm;
  }


  createNewStudent() {
    this.Students.push({
      rollNo: this.newStudentRollNo,
      name: this.newStudentName,
      status: this.newStudentStatus
    });
    this.newStudentRollNo = 0;
    this.newStudentName = '';
    this.newStudentStatus = '';
    this.showNewForm = false;
  }

  deleteStudent(index: number) {
    this.Students.splice(index, 1);
  }

  openEditForm(index: number) {
    this.editingIndex = index;
    this.editStudentRollNo = this.Students[index].rollNo;
    this.editStudentName = this.Students[index].name;
    this.editStudentStatus = this.Students[index].status;
    this.showEditForm = true;
  }

  closeEditForm() {
    this.showEditForm = false;
    this.editingIndex = null;
  }

  updateStudent() {
    if (this.editingIndex !== null) {
      this.Students[this.editingIndex] = {
        rollNo: this.editStudentRollNo,
        name: this.editStudentName,
        status: this.editStudentStatus
      };
      this.closeEditForm();
    }
  }
}
