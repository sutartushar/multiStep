const Step3 = ({ formData }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center">Confirmation</h2>
      <div className="text-center">
        <div className="">
          <h3 className="font-medium text-lg">Personal Information</h3>
          <p className="font-medium">
            Name: <span className="font-normal	">{formData.username}</span>
          </p>
          <p className="font-medium">
            Email: <span className="font-normal	">{formData.email}</span>
          </p>
          <p className="font-medium">
            Phone: <span className="font-normal	"> {formData.phone}</span>{" "}
          </p>
        </div>
        <div>
          <h3 className="font-medium text-lg">Address Information</h3>
          <p className="font-medium">
            Address Line 1:{" "}
            <span className="font-normal	">{formData.address1}</span>
          </p>
          <p className="font-medium">
            Address Line 2:{" "}
            <span className="font-normal	">{formData.address2}</span>
          </p>
          <p className="font-medium">
            City: <span className="font-normal	">{formData.city}</span>
          </p>
          <p className="font-medium">
            State: <span className="font-normal	">{formData.state}</span>
          </p>
          <p className="font-medium">
            Zip Code: <span className="font-normal	">{formData.zip}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
