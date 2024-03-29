import { check } from "express-validator";

//REGISTRAR
export const validarFincaR = [
    check('nombre_finca', 'El nombre de la finca es obligatorio y debe tener máximo 100 caracteres, y solo puede contener letras y espacios')
        .not().isEmpty().isLength({ max: 100 }).matches(/^[a-zA-Z\s]+$/),
    check('longitud', 'La longitud debe ser un dato obligatorio y debe ser un número válido entre -180 y 180')
        .isFloat({ min: -180, max: 180 }),
    check('latitud', 'La latitud debe ser un dato obligatorio y debe ser un número válido entre -90 y 90')
        .isFloat({ min: -90, max: 90 })
];

// ACTUALIZAR
//nn
export const validarFincaA = [
    check('nombre_finca', 'El nombre de la finca debe tener máximo 100 caracteres y solo puede contener letras y espacios')
        .optional({ nullable: true })
        .isLength({ max: 100 })
        .matches(/^[a-zA-Z\s]+$/),
    check('longitud', 'La longitud debe ser un número válido entre -180 y 180')
        .optional({ nullable: true })
        .isFloat({ min: -180, max: 180 }),
    check('latitud', 'La latitud debe ser un número válido entre -90 y 90')
        .optional({ nullable: true })
        .isFloat({ min: -90, max: 90 })
];

