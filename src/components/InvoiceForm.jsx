import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField'; 

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    invoiceId: '',
    invoiceDate: '',
    firstName: '',
    lastName: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/invoice', {
        ...formData,
        invoiceId: Number(formData.invoiceId),
        amount: Number(formData.amount),
        invoiceDate: formData.invoiceDate + "T00:00:00"
      });
      alert('Invoice created successfully!');
      setFormData({ invoiceId: '', invoiceDate: '', firstName: '', lastName: '', amount: '' }); // reset
    } catch (error) {
      console.error('Error creating invoice:', error);
      alert('Failed to create invoice');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create Invoice</h2>
      <form onSubmit={handleSubmit}>
        <InputField 
          label="Invoice ID" 
          name="invoiceId" 
          value={formData.invoiceId} 
          onChange={handleChange} 
        />
        <InputField 
          label="Invoice Date" 
          name="invoiceDate" 
          type="date"
          value={formData.invoiceDate} 
          onChange={handleChange} 
          required
        />
        <InputField 
          label="First Name" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          required
        />
        <InputField 
          label="Last Name" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          required
        />
        <InputField 
          label="Amount" 
          name="amount" 
          type="number"
          value={formData.amount} 
          onChange={handleChange} 
          required
        />
        <button type="submit" style={{ marginTop: '10px', padding: '8px 16px' }}>
          Save Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
