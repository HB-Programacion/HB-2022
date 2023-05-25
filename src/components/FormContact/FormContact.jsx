import React, { useState } from 'react'
import "./FormContact.css";

const FormContact = () => {

   const [contacto, setContacto] = useState('');
   const [nombre, setNombre] = useState('');
   const [compania, setCompania] = useState('');
   const [email, setEmail] = useState('');
   const [telefono, setTelefono] = useState('');
   const [politicas, setPoliticas] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Contacto:', contacto);
      console.log('Nombre:', nombre);
      console.log('Compañía:', compania);
      console.log('Email:', email);
      console.log('Teléfono:', telefono);
      console.log('Políticas:', politicas);
   }

  return (
   <form onSubmit={handleSubmit}>
      <label>
         <select value={contacto} onChange={(e) => setContacto(e.target.value)}>
            <option value="">Seleccionar</option>
            <option value="Teléfono">Teléfono</option>
            <option value="Email">Email</option>
         </select>
      </label>
      <br />

      <label>
         <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Full name" />
      </label>
      <br />

      <label>
         <input type="text" value={compania} onChange={(e) => setCompania(e.target.value)} placeholder="Company name"/>
      </label>
      <br />

      <label>
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
      </label>
      <br />

      <label>
         <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Phone"/>
      </label>
      <br />

      <label>
         <input type="checkbox" checked={politicas} onChange={(e) => setPoliticas(e.target.checked)}/>
         He leído las políticas de datos
      </label>
      <br />

      <div className="button__send">
         <button type='submit'>
            SEND
         </button>
      </div>
   </form>
  )
}

export default FormContact