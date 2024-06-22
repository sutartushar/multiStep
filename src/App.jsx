import { useState, useEffect } from "react";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3";
import Navigation from "./component/Navigation";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [error, setError] = useState({});

  //* controlled input field
  const handleChange = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  //* validation for input fields
  const validation = () => {
    const tempErrors = {};

    if (step === 1) {
      if (!formData.name) tempErrors.name = "Name is required";
      if (!formData.email) tempErrors.email = "Email is required";
      if (!/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Email address is invalid";
      if (!formData.phone) tempErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!formData.address1)
        tempErrors.address1 = "Address Line 1 is required";
      if (!formData.city) tempErrors.city = "City is required";
      if (!formData.state) tempErrors.state = "State is required";
      if (!formData.zip) tempErrors.zip = "Zip code is required";
    }

    setError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  //* handle next button
  const handleNext = () => {
    const allFieldsEmpty = Object.values(formData).every(
      (field) => field === ""
    );

    if (step === 1 || step === 2) {
      if (allFieldsEmpty) {
        alert("All fields are required");
        return;
      }
    }

    if (step === 1 || (step === 2 && validation())) {
      setStep(step + 1);
    }
  };

  //* handle back button
  const handlePrev = () => {
    setStep(step - 1);
  };

  //* handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted successfully!");
    setFormData({
      username: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
    setStep(1);
  };

  //* local storage
  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("formData"));
    if (saveData) {
      setFormData(saveData);
    }
  }, []);

  return (
    <>
      {step === 1 && (
        <Step1 formData={formData} handleChange={handleChange} error={error} />
      )}

      {step === 2 && (
        <Step2 formData={formData} handleChange={handleChange} error={error} />
      )}

      {step === 3 && <Step3 formData={formData} />}

      <div className="flex justify-center mt-4">
        <Navigation
          handleNext={handleNext}
          handlePrev={handlePrev}
          step={step}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
