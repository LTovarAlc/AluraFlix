import React, { useState } from 'react';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="custom-select">
      <div className="select-wrapper">
        <select value={selectedOption} onChange={handleOptionChange}>
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
