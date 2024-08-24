import React, { useState } from "react";

const Image = ({ formData, handleFileChange, nextStep, prevStep }) => {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhotoPreview(URL.createObjectURL(file));
    handleFileChange("photo")(e);
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    setSignaturePreview(URL.createObjectURL(file));
    handleFileChange("signature")(e);
  };

  const continueToNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueToNext}>
      <h2>Image Upload</h2>
      <label>Upload Your Photo:</label>
      <input type="file" onChange={handlePhotoChange} required />
      {photoPreview && <img src={photoPreview} alt="Photo Preview" />}
      <label>Upload Signature Photo:</label>
      <input type="file" onChange={handleSignatureChange} required />
      {signaturePreview && <img src={signaturePreview} alt="Signature Preview" />}
      <button type="button" className="previous-button" onClick={prevStep}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Image;
