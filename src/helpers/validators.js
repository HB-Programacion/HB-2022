//import moment from 'moment';

export const validateNames = (str) => {
  var pattern = new RegExp("[a-zA-Z]+$");
  return !!pattern.test(str);
};

export const validateCity = (str) => {
  var pattern = new RegExp("[a-zA-Z]");
  return !!pattern.test(str);
};

export const validateEmail = (str) => {
  var pattern = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );
  return !!pattern.test(str);
};

export const validateDni = (str) => {
  var pattern = new RegExp("^[0-9]{8,9}$");
  return !!pattern.test(str);
};

export const validatePhone = (str) => {
  var pattern = new RegExp("^[0-9]{9,9}$");
  return !!pattern.test(str);
};

export const validateCode = (str) => {
  var pattern = new RegExp("^[0-9a-zA-Z]{6,6}$");
  return !!pattern.test(str);
};

/* export const validateDate = (str) => {
	//string must be less than date 
	const date = moment().subtract(18, 'years').format('YYYY-MM-DD')
	if(str <= date) {
		return true; 
	} else {
		return false;
	}
};*/


export const errorMessageTerms = {
	icon: "error",
	iconColor: "#d20a11",
	text: "Debe aceptar los términos y condiciones",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};

export const errorEmpty = {
	icon: "error",
	iconColor: "#d20a11",
	text: "Los campos están vacíos",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
}

export const addedCorrectly = {
	icon: "success",
	iconColor: "#00bb2d",
	text: "Se agregó correctamente",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
}

export const errorMessageFormatDni = {
	icon: "error",
	iconColor: "#d20a11",
	text: "El formato del documento es incorrecto",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};

export const errorMessageFormatName = {
	icon: "error",
	iconColor: "#d20a11",
	text: "El formato del nombre es incorrecto",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};

export const errorMessageFormatEmail = {
	icon: "error",
	iconColor: "#d20a11",
	text: "El formato del correo es incorrecto",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};

export const errorMessageFormatPhone = {
	icon: "error",
	iconColor: "#d20a11",
	text: "El formato del número de contacto es incorrecto",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};

export const errorMessageFormatCode = {
	icon: "error",
	iconColor: "#d20a11",
	text: "El formato de código es incorrecto",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};

export const errorMessageFormatCity = {
	icon: "error",
	iconColor: "#d20a11",
	text: "El formato de la ciudad es incorrecto",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};

export const errorMessageFormatDate = {
	icon: "error",
	iconColor: "#d20a11",
	text: "El formato de la fecha de nacimiento es incorrecto",
	showConfirmButton: false,
	timer: 1500,
	customClass: {
		popup: "swal2-border-radius",
	},
};