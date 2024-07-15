import { useState } from "react";

const formGroupStyle = { display: 'flex', flexDirection: 'column', textAlign: 'left'}

const inputModalStyle = {borderRadius: '3px', border: '2px solid #cccccc', margin: '10px 0px 20px 0px', height: '30px', width: '200px', paddingLeft: '10px' }

const FormModal = () => {
  const [formData, setFormData] = useState({
    ID: '',
    description: '',
    date_release: '',
    name: '',
    logo: '',
    date_revision: ''
  });

  const [errors, setErrors] = useState({
    ID: '',
    description: '',
    date_release: '',
    name: '',
    logo: '',
    date_revision: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar el error cuando el usuario comienza a escribir en el campo
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    formData.forEach(field => {
      if(!field) {
        formIsValid = false;
        newErrors[field] = 'Este campo es requerido';
      }
    });

    // if (!formData.ID) {
    //   formIsValid = false;
    //   newErrors.name = 'Este campo es requerido';
    // }
    // if (!formData.description) {
    //   formIsValid = false;
    //   newErrors.name = 'El nombre es requerido';
    // }
    // if (!formData.date_release) {
    //   formIsValid = false;
    //   newErrors.name = 'El nombre es requerido';
    // }
    // if (!formData.name) {
    //   formIsValid = false;
    //   newErrors.name = 'El nombre es requerido';
    // }
    // if (!formData.logo) {
    //   formIsValid = false;
    //   newErrors.name = 'El nombre es requerido';
    // }
    // if (!formData.date_revision) {
    //   formIsValid = false;
    //   newErrors.message = 'El mensaje es requerido';
    // }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a una API
      console.log('Form data submitted:', formData);
      // Reiniciar el formulario si es necesario
      setFormData({
        ID: '',
        description: '',
        date_release: '',
        name: '',
        logo: '',
        date_revision: ''
  });
    }
  };


  return(
    <form onSubmit={handleSubmit} className="form">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 40px 40px 40px'}}>
      <div style={{flexDirection: 'column', marginRight: '0px'}}>
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="ID" >ID:</label>
          <input
            type="text"
            id="ID"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
            required
            style={inputModalStyle}
          />
          {errors.ID && <span className="error">{errors.ID}</span>}
        </div>
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={inputModalStyle}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="date_release">Fecha de liberación:</label>
          <input
            type="date"
            id="date_release"
            name="date_release"
            value={formData.date_release}
            onChange={handleChange}
            required
            style={inputModalStyle}
          />
          {errors.date_release && <span className="error">{errors.date_release}</span>}
        </div>
      </div>
      <div style={{flexDirection: 'column', marginLeft: '0px'}}>
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputModalStyle}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="email">Logo:</label>
          <input
            type="text"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            required
            style={inputModalStyle}
          />
          {errors.logo && <span className="error">{errors.logo}</span>}
        </div>
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="message">Fecha de revision:</label>
          <input
            type="text"
            id="date_revision"
            name="date_revision"
            value={formData.date_revision}
            onChange={handleChange}
            required
            style={inputModalStyle}
          />
          {errors.date_revision && <span className="error">{errors.date_revision}</span>}
        </div>
      </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0px 130px',margin: '0px 0px 20px 0px'}}>
      <button type="submit" className="submit-button" style={{ color: '#003466', fontWeight: '600', background: '#E6E6E6', height: '40px', width:'80px', fontSize:'10px', borderRadius:'3px', border: '0px'}}>Reiniciar</button>
      <button type="submit" className="submit-button" style={{ color: '#003466', fontWeight: '600', background: 'rgb(255, 221, 0)', height: '40px', width:'80px', fontSize:'10px', borderRadius:'3px', border: '0px'}}>Enviar</button>
      </div>
      </form>
  )
}

export default FormModal;