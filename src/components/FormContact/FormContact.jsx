import React, { useState } from 'react'
import "./FormContact.css";

const FormContact = () => {

   const servicesData = [
      {
         "nombre" : "Content",
         "id" : 1
      },
      {
         "nombre" : "Design",
         "id" : 2
      },
      {
         "nombre" : "Strategy",
         "id" : 3
      },
      {
         "nombre" : "Web Design",
         "id" : 4
      },
      {
         "nombre" : "Events",
         "id" : 5
      },
      {
         "nombre" : "Productions",
         "id" : 6
      }
   ]

   const [services, setServices] = useState(servicesData);
   const [serviceSelected, setServiceSelected] = useState('');
   const [nombre, setNombre] = useState('');
   const [compania, setCompania] = useState('');
   const [email, setEmail] = useState('');
   const [telefono, setTelefono] = useState('');
   const [politicas, setPoliticas] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('serviceSelected:', serviceSelected);
      console.log('Nombre:', nombre);
      console.log('Compañía:', compania);
      console.log('Email:', email);
      console.log('Teléfono:', telefono);
      console.log('Políticas:', politicas);
   }

  return (
   <form onSubmit={handleSubmit} className="container-form">
      <div className='selectContainer'>
         <select value={serviceSelected} onChange={(e) => setServiceSelected(e.target.value)}>
               <option value="" disabled selected>Contact me for...</option>
            {services.map((op) => (
               <option key={op.value} value={op.value}>{op.nombre}</option>
            ))}
         </select>
      </div>
      <br />

      <div>
         <input 
            className='inputContainer name'
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Full name"
         />
      </div>
      <div>
         <input
            className='inputContainer compania'
            type="text"
            value={compania}
            onChange={(e) => setCompania(e.target.value)}
            placeholder="Company name"
         />
      </div>
      <div className='container-two'>
         <input
            className='inputContainer email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
         />
         <input
            className='inputContainer telefono'
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Phone"
         />
      </div>
      <div>
         <input
            className='inputContainer politicas'
            type="checkbox"
            checked={politicas}
            onChange={(e) => setPoliticas(e.target.checked)}
         />
         He leído las políticas de datos
      </div>
      <div className="button__send">
         <button type='submit'>
            SEND
         </button>
      </div>
   </form>
  )
}

export default FormContact