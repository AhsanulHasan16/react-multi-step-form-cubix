import React, { useState } from "react";
import Account from "./Account";
import Personal from "./Personal";
import Image from "./Image";
import Finish from "./Finish";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    contactNo: "",
    alternateContactNo: "",
    photo: null,
    signature: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleFileChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.files[0] });
  };

  const renderStep = () => {
    switch (step) {
        case 1:
          return (
            <Account
              formData={formData}
              handleChange={handleChange}
              nextStep={nextStep}
            />
          );
        case 2:
          return (
            <Personal
              formData={formData}
              handleChange={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          );
        case 3:
          return (
            <Image
              formData={formData}
              handleFileChange={handleFileChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          );
        case 4:
          return <Finish />;
        default:
          return null;
      }
  };

  const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="multiform-container">
      <header className="form-header">
        <h1>SIGN UP YOUR USER ACCOUNT</h1>
        <p class="special-color">Fill all form fields to go to next step</p>
      </header>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      {renderStep()}
    </div>
  );

};

export default MultiStepForm;
