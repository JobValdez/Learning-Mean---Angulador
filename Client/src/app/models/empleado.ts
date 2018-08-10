export class Empleado {
	constructor(_id = '', f_name = '', f_position = '', f_office = '', f_salary = 0){
		this._id =_id;
		this.f_name = f_name;
		this.f_position = f_position;
		this.f_office = f_office;
		this.f_salary = f_salary;


	}
	_id: string;
	f_name:string;
	f_position: string;
	f_office: string;
	f_salary: number;
}
