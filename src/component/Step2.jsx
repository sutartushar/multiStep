import { TextField } from "@mui/material";

const Step2 = ({ formData, handleChange, error }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center">Address Information</h2>
      <form className="flex flex-col space-y-6 items-center mt-6" action="">
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">Address Line 1:</label>
          <TextField
            id="outlined-basic"
            label="Address Line 1"
            variant="outlined"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
          {error.address1 && <p className="text-red-700">{error.address1}</p>}
        </div>
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">Address Line 2:</label>
          <TextField
            id="outlined-basic"
            label="Address Line 2"
            variant="outlined"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">City:</label>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {error.city && <p className="text-red-700">{error.city}</p>}
        </div>
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">State:</label>
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          {error.state && <p className="text-red-700">{error.state}</p>}
        </div>
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">Zip Code:</label>
          <TextField
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          {error.zip && <p className="text-red-700">{error.zip}</p>}
        </div>
      </form>
    </div>
  );
};

export default Step2;
