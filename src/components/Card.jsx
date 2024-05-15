import "./card.css"
export const Card = ({ title, Icons, info }) => {
  return (
    <div className="icons col-lg-6 col-xxl-4 mb-5">
      <div className="card bg-light border-0 h-100">
        <div className="cards card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            {Icons}
          </div>
          <h2 className="fs-4 fw-bold">{title}</h2>
          <p className="mb-0">{info}</p>
        </div>
      </div>
    </div>
  );
};
