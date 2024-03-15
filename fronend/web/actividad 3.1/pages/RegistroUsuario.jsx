import React, { useState } from 'react';
import '../pages/RegistroUsuario.css';
import axios from 'axios';

function RegistroUsuario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    rol: 'usuario', // Por defecto, el rol será usuario
    estado: 'activo' // Por defecto, el estado será activo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/registrarUsuario', formData);

    
      console.log('Respuesta del servidor:', response.data);
      // Aquí puedes mostrar un mensaje de éxito al usuario o redirigirlo a otra página
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="registro-usuario-container">
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} />
        </label>
        <br />
        <label>
          Rol:
          <select name="rol" value={formData.rol} onChange={handleChange}>
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </select>
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistroUsuario;
