import React from 'react';

const CustomSelect = ({ value, onChange }) => {

  const handleOptionChange = event => {
    const selectedValue = event.target.value;
    onChange(selectedValue)
  }


  return (
    <div className="custom-select">
      <div className="select-wrapper">
        <select value={value} onChange={handleOptionChange}>
          <option value="" disabled>
            Selecciona una categoría
          </option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Música">Música</option>
          <option value="Cocina">Cocina</option>
          <option value="Educación">Educación</option>
          <option value="Deportes">Deportes</option>
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
