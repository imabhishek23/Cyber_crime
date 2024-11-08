import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  private complaints: any[] = []; // Array to hold complaints
  private complaintsSubject = new BehaviorSubject<any[]>(this.complaints); // Observable for complaints

  getComplaints() {
    return this.complaintsSubject.asObservable(); // Return observable
  }

  addComplaint(complaint: any) {
    this.complaints.push(complaint); // Add new complaint to the array
    this.complaintsSubject.next(this.complaints); // Notify subscribers
  }
}
