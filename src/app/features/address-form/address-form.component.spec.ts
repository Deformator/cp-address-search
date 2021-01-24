import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppCommonModule } from 'src/app/common/common.module';
import { CoreModule } from 'src/app/common/core/core.module';
import { StoreService } from 'src/app/common/core/services/store.service';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { CanadaPostStoreService } from '../services/canadaPost-store.service';
import { CanadaPostService } from '../services/canadaPost.service';

import { AddressFormComponent } from './address-form.component';

describe('AddressFormComponent', () => {
  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressFormComponent],
      providers: [CanadaPostStoreService, CanadaPostService],
      imports: [ReactiveFormsModule, AppCommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormComponent);
    console.log(fixture);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
