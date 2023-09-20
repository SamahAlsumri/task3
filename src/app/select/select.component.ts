import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class selectComponent {
  selectedUser: number = 0; // Initially, no user selected
  users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    // Add more users as needed
  ];

  constructor(private router: Router) { }

  startQuestionnaire() {
    this.router.navigate(['/question', this.selectedUser]);
  }
}