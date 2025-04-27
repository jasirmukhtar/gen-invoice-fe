import React from 'react';

const InputField = ({ label, name, type = "text", value, onChange, required = false }) => {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label>
        {label}: 
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={{ marginLeft: '10px', padding: '6px', width: '200px' }}
        />
      </label>
    </div>
  );
};

export default InputField;
