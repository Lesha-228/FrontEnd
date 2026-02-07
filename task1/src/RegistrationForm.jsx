import { useState } from "react";

function RegistrationForm() {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // error state
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  const [success, setSuccess] = useState(false);

  // validation functions
  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!regex.test(value)) return "Invalid email format";
    return "";
  };

  const validateAge = (value) => {
    if (!value) return "Age is required";
    if (Number(value) < 18) return "Must be 18+";
    return "";
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const nErr = validateName(name);
    const eErr = validateEmail(email);
    const aErr = validateAge(age);

    setNameError(nErr);
    setEmailError(eErr);
    setAgeError(aErr);

    if (nErr || eErr || aErr) {
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          const v = e.target.value;
          setName(v);
          setNameError(validateName(v));
        }}
      />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          const v = e.target.value;
          setEmail(v);
          setEmailError(validateEmail(v));
        }}
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          const v = e.target.value;
          setAge(v);
          setAgeError(validateAge(v));
        }}
      />
      {ageError && <p style={{ color: "red" }}>{ageError}</p>}

      <button type="submit">Submit</button>

      {success && (
        <p style={{ color: "green" }}>Registration successful!</p>
      )}
    </form>
  );
}

export default RegistrationForm;