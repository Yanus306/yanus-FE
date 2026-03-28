import "./divider.css";

const Divider = () => {
  return (
    <div className="divider-container">
      <div className="divider-base-line"></div>
      
      <div className="divider-dots-group">
        <div className="divider-dot divider-dot-small"></div>
        <div className="divider-dot divider-dot-large"></div>
        <div className="divider-dot divider-dot-small"></div>
      </div>
    </div>
  );
};

export default Divider;