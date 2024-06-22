import Button from "@mui/material/Button";

const Navigation = ({ step, handleNext, handlePrev, handleSubmit }) => {
  return (
    <div className="flex">
      {step > 1 && (
        <div className="mr-4">
          <Button variant="contained" onClick={handlePrev}>
            Back
          </Button>
        </div>
      )}

      {step < 3 ? (
        <div>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </div>
      ) : (
        <div>
          <Button variant="contained" onClick={handleSubmit} color="success">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
