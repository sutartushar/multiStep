import TextField from "@mui/material/TextField";

const Step1 = ({ formData, handleChange, error }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center"> Personal Information</h2>
      <form className="flex flex-col space-y-6 items-center mt-6" action="">
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">Name:</label>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {error.username && <p className="text-red-700">{error.username}</p>}
        </div>
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">Email:</label>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p className="text-red-700">{error.email}</p>}
        </div>
        <div className="flex items-center">
          <label className="text-lg font-medium mr-4">Phone:</label>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {error.phone && <p className="text-red-700">{error.phone}</p>}
        </div>
      </form>
    </div>
  );
};

export default Step1;
