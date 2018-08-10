export class Cliente {

	constructor( f_idempresa = '', f_vendedor = '', f_idcliente = '', f_nombre = '', f_contacto = '',     
		f_telefono = '', f_celular1 = '', f_celular2 = '', f_fax = '', f_email = '', f_direccion = '',     
		f_provincia = '', f_dias_creditos = '', f_dia_entrega = '', f_nota = '', f_credito = '',        
		f_limite_credito = '', f_fecha = ''){

		this.f_idempresa =      f_idempresa;   
		this.f_vendedor =       f_vendedor;
		this.f_idcliente =      f_idcliente;
		this.f_nombre =         f_nombre;
		this.f_contacto =       f_contacto;
		this.f_telefono =       f_telefono;
		this.f_celular1 =       f_celular1; 
		this.f_celular2 =       f_celular2;
		this.f_fax =            f_fax;
		this.f_email =          f_email;
		this.f_direccion =      f_direccion;
		this.f_provincia =      f_provincia;
		this.f_dias_creditos =  f_dias_creditos;
		this.f_dia_entrega =    f_dia_entrega;
		this.f_nota =           f_nota;
		this.f_credito =        f_credito;
		this.f_limite_credito = f_limite_credito;
		this.f_fecha =          f_fecha;

	}
        _id: string;
		f_idempresa: string;   
		f_vendedor:  string;
		f_idcliente: string;
		f_nombre: string;
		f_contacto: string;
		f_telefono: string;
		f_celular1:  string;
		f_celular2: string;
		f_fax: string;
		f_email:string;
		f_direccion: string;
		f_provincia: string;
		f_dias_creditos: string;
		f_dia_entrega: string;
		f_nota: string;
		f_credito: string;
		f_limite_credito: string;
		f_fecha: string;
}
