import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

constructor(
	private formBuilder: FormBuilder,
	) {}

	form = this.formBuilder.group({
    username: ['', Validators.compose([
    	Validators.required,
    	Validators.minLength(3),
    	Validators.maxLength(25),
    	this.validateUsername
    	])],
    email: ['', Validators.compose([
    	Validators.required,
    	Validators.minLength(5),
    	Validators.maxLength(40),
    	this.validateEmail
    	])],
    password: ['', Validators.compose([
    	Validators.required,
    	Validators.minLength(8),
    	Validators.maxLength(35),
    	this.validatePassword
    	])],
    confirm: ['', Validators.required]
  }, { validator: this.matchingPassword('password', 'confirm')})

	validateEmail(controls){
		const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    	if (regExp.test(controls.value)) {
    		return null;
    	}else{
    		return{'validateEmail': true}
    	}
	}

	validateUsername(controls){
		const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
		if (regExp.test(controls.value)) {
			return null;
		}else{
			return{'validateUsername':true}
		}
	}

	validatePassword(controls){
		const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
		if (regExp.test(controls.value)) {
			return null;
		}else{
			return{'validatePassword':true}
		}
	}

	matchingPassword(password, confirm){
		return (group: FormGroup) => {
			if (group.controls[password].value === group.controls[confirm].value){
				return null;
			}else{
				return{'matchingPassword':true}
			}
		}
	}

onRegisterSubmit(){
	console.log(this.form.get('email').value);
	console.log(this.form.get('username').value);
}

  ngOnInit() {
  }

}
