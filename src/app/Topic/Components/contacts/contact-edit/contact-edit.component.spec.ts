import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, flushMicrotasks, flush, waitForAsync, TestModuleMetadata } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';

import { Contact, InvalidEmailModalComponent, InvalidPhoneNumberModalComponent } from '../../../../shared';
import { FavoriteIconDirective } from '../../../Directives/favorite-icon.directive';
import { ContactService } from '../../../Services/Observable-based Service/contact.service';

import { AppMaterialModule } from '../../../../app.material.module';
import { ContactEditComponent } from './contact-edit.component';

import '../../../../../assets/scss/material-app-theme.scss';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('ContactEditComponent tests', () => {

  let fixture: ComponentFixture<ContactEditComponent>;
  let component: ContactEditComponent;
  let rootElement: DebugElement;

  const contactServiceStub = {

    contact: {
      id: 1,
      name: 'janet'
    },

    save: function (contact: Contact) {
      return of(component.contact = contact);
    },

    getContact: function (id: number) {
      return of({...this.contact});
    },

    updateContact: function (contact: Contact) {
      component.contact = contact;
    }

  };

  const activatedRouteStub = {
    params: of({ id: 1 })
  }

  function getTestModuleMetaData(): TestModuleMetadata {
    return {
      declarations: [ContactEditComponent, FavoriteIconDirective, InvalidEmailModalComponent, InvalidPhoneNumberModalComponent],
      imports: [
        AppMaterialModule,
        FormsModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ContactService, useValue: contactServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }
  }

  beforeEach(waitForAsync(() => {

    TestBed
    .configureTestingModule(getTestModuleMetaData())
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [InvalidEmailModalComponent, InvalidPhoneNumberModalComponent]
      }
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ContactEditComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      rootElement = fixture.debugElement;
    });

  }));

  describe('saveContact() test', () => {

    it('should display contact name after contact set', fakeAsync(() => {

      const contact = {
        id: 1,
        name: 'lorace'
      };

      component.isLoading = false;
      component.saveContact(contact);
      fixture.detectChanges();
      flush();
      const nameInput = rootElement.query(By.css('.contact-name'));
      tick();
      expect(nameInput.nativeElement.value).toBe('lorace');

    }));

  });

  describe('loadContact() test', () => {

    it('should load contact', fakeAsync(() => {

      component.isLoading = false;
      component.loadContact();
      fixture.detectChanges();
      flush();

      const nameInput = rootElement.query(By.css('.contact-name'));
      tick();
      expect(nameInput.nativeElement.value).toBe('janet');
      
    }));

  });

  describe('updateContact() tests', () => {

    it('should update the contact', fakeAsync(() => {
      const newContact = {
        id: 1,
        name: 'delia',
        email: 'delia@example.com',
        number: '1234567890'
      };

      component.contact = {
        id: 2,
        name: 'rhonda',
        email: 'rhonda@example.com',
        number: '1234567890'
      };

      component.isLoading = false;
      fixture.detectChanges();
      flush();
      const nameInput = rootElement.query(By.css('.contact-name'));
      tick();
      expect(nameInput.nativeElement.value).toBe('rhonda');

      component.updateContact(newContact);
      fixture.detectChanges();
      flush();
      tick(100);
      expect(nameInput.nativeElement.value).toBe('delia');

    }));

    it('should not update the contact if email is invalid', fakeAsync(() => {

      const newContact = {
        id: 1,
        name: 'london',
        email: 'london@example',
        number: '1234567890'
      };

      component.contact = {
        id: 2,
        name: 'chauncey',
        email: 'chauncey@example.com',
        number: '1234567890'
      };

      component.isLoading = false;
      fixture.detectChanges();
      const nameInput = rootElement.query(By.css('.contact-name'));
      tick();
      expect(nameInput.nativeElement.value).toBe('chauncey');

      component.updateContact(newContact);
      fixture.detectChanges();
      tick(100);
      expect(nameInput.nativeElement.value).toBe('chauncey');

    }));

    it('should not update the contact if phone number is invalid', fakeAsync(() => {

      const newContact = {
        id: 1,
        name: 'london',
        email: 'london@example.com',
        number: '12345678901'
      };

      component.contact = {
        id: 2,
        name: 'chauncey',
        email: 'chauncey@example.com',
        number: '1234567890'
      };

      component.isLoading = false;
      fixture.detectChanges();
      const nameInput = rootElement.query(By.css('.contact-name'));
      tick();
      expect(nameInput.nativeElement.value).toBe('chauncey');

      component.updateContact(newContact);
      fixture.detectChanges();
      tick(100);
      expect(nameInput.nativeElement.value).toBe('chauncey');
    }));

  });

});
