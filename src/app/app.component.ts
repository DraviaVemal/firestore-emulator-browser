import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { firestore } from 'firebase';


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

  private html = '';
  private collectionForm: FormGroup;
  private someObject;
  private collt;

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
    this.collt = ' - ' + colName;
    this.collectionForm.reset();
    this.arrSubscriptions$.push(this.angularFirestore.collection(colName).get().subscribe(dbData => {
      const dbResult = dbData.docs.map(a => {
        const data = a.data();
        const id = a.id;
        return { [id]: data };
      });
      this.someObject = dbResult;
    }));
  }
  get code() {
    return JSON.stringify(this.someObject, null, 2);
  }

  set code(v) {
    try {
      this.someObject = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }
  //#endregion
}
