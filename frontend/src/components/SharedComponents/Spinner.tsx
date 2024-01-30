import "./spinner.css";

const Spinner: React.FC = () => {
  return (
    <>
      <div className="spinner-container">
        <div className="lds-dual-ring"></div>
      </div>
    </>
  );
};

export default Spinner;
