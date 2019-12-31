import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  //#region Mandatory Clean up items
  /**
   * Present Component's All active subscptions kept in array so can be cleared on component destroy
   */
  private arrSubscriptions$ = [] as Subscription[];
  //#endregion
  //#region Variables
  private data: any;
  private collectionForm: FormGroup;
  //#endregion
  //#region Constructor
  constructor(
    private angularFirestore: AngularFirestore,
    private formBuilder: FormBuilder
  ) {
    this.collectionForm = this.formBuilder.group({
      colName: ''
    });
  }
  //#endregion
  //#region Implements
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    // Clearing All Angular Subscriptions made
    for (const item of this.arrSubscriptions$) {
      item.unsubscribe();
    }
  }
  //#endregion
  //#region Methods
  onSubmit(customerData: FormGroup) {
    // Clearing All Angular Subscriptions made
    for (const item of this.arrSubscriptions$) {
      item.unsubscribe();
    }
    const colName = customerData.value.colName;
    this.arrSubscriptions$.push(this.angularFirestore.collection(colName).valueChanges().subscribe(dbData => {
      this.data = JSON.stringify(dbData);
    }));
  }
  //#endregion
}
