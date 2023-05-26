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
   const [privacy, setPrivacy] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('serviceSelected:', serviceSelected);
      console.log('Nombre:', nombre);
      console.log('Compañía:', compania);
      console.log('Email:', email);
      console.log('Teléfono:', telefono);
      console.log('privacy:', privacy);
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
      <div className='inputContainer'>
         <input 
            className='name'
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Full name"
         />
      </div>
      <div className='inputContainer'>
         <input
            className='compania'
            type="text"
            value={compania}
            onChange={(e) => setCompania(e.target.value)}
            placeholder="Company name"
         />
      </div>
      <div className='container-two'>
         <div className='inputContainer'>
            <input
               className='email'
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Email"
            />
         </div>
         <div className='inputContainer'>
            <input
               className='telefono'
               type="tel"
               value={telefono}
               onChange={(e) => setTelefono(e.target.value)}
               placeholder="Phone"
            />
         </div>
      </div>
      <div className='checkContainer'>
         <input
            className='privacy'
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
         />
         <div className='privacy-text'>
            Yes, Henri Barrett can process my personal data in accordance with the privacy policy
         </div>
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