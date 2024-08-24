import React from "react";

const Personal = ({ formData, handleChange, nextStep, prevStep }) => {
  const continueToNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueToNext}>
      <h2>Personal Information</h2>
      <label>First Name:</label>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange("firstName")}
        required
      />
      <label>Last Name:</label>
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange("lastName")}
        required
      />
      <label>Contact No.:</label>
      <input
        type="tel"
        placeholder="Contact No."
        value={formData.contactNo}
        onChange={handleChange("contactNo")}
        required
      />
      <label>Alternate Contact No.:</label>
      <input
        type="tel"
        placeholder="Alternate Contact No."
        value={formData.alternateContactNo}
        onChange={handleChange("alternateContactNo")}
        required
      />
      <button type="button" className="previous-button" onClick={prevStep}>
        Previous
      </button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Personal;
