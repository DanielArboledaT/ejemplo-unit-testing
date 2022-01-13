import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { by } from 'protractor';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Existe el componente', () => {
    expect(component).toBeTruthy();
  });

  it('formulario invalido', () => {
    fixture.detectChanges();

    const email = component.formLogin.controls.email;
    const password = component.formLogin.controls.password;

    email.setValue('daniel@gmail.com');
    password.setValue('122345');

    expect(component.formLogin.invalid).toBeFalse();
  });

  it('Email incorrecto', () => {
    fixture.detectChanges();

    const email = component.formLogin.controls.email;

    email.setValue('daniel@gmail.com');

    expect(email.value.includes('-')).toBeTrue();
  });

  it('Logueo correcto', () => {
    fixture.detectChanges();

    const isloged = component.login('daniel@gmail.com', '12345');

    expect(isloged).toBeTrue();
  });

  it('Segundo test logueo incorrecto', () => {
    fixture.detectChanges();

    const btnIngresar = fixture.debugElement.query(By.css('button.btn'));
    btnIngresar.nativeElement.click();

    const userReturn = {user: 'daniel y andres'};

    expect(component.testLogin()).toEqual(userReturn);
  });



});
