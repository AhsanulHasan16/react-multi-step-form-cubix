import React from "react";

const Account = ({ formData, handleChange, nextStep }) => {
  const continueToNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueToNext}>
      <h2>Account Information</h2>
      <label>Email:</label>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange("email")}
        required
      />
      <label>Username:</label>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange("username")}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange("password")}
        required
      />
      <label>Confirm Password:</label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange("confirmPassword")}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default Account;
