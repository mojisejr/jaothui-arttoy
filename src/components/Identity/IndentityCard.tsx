const IdentityCard = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-base-200">
        <div className="card my-2 w-11/12 bg-base-100 lg:my-6 lg:w-1/4">
          <h2 className="card-title px-5 py-5 text-5xl font-bold">
            Jaothui Arttoy v.1{" "}
            <div className="badge badge-primary badge-lg">new</div>
          </h2>

          <figure>
            <img src="/images/toy1.jpg" />
          </figure>
          <div className="card-body">
            <div className="card-title">information</div>
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title text-primary">Serial No.</div>
                <div className="stat-value text-secondary lg:stat-value">
                  V.0.1
                </div>
                <div className="stat-desc">arttoy{"'"}s serial number</div>
              </div>
              <div className="stat">
                <div className="stat-title text-primary">Model No.</div>
                <div className="stat-title font-bold text-secondary lg:stat-value">
                  V.0.1
                </div>
                <div className="stat-desc">arttoy{"'"}s serial Model No.</div>
              </div>
              <div className="stat">
                <div className="stat-title text-primary">Signature Id.</div>
                <div className="stat-title font-bold text-secondary lg:stat-value">
                  V.0.1
                </div>
                <div className="stat-desc">arttoy{"'"}s NFC signature</div>
              </div>
              <div className="stat">
                <div className="stat-title text-primary">created date</div>
                <div className="stat-title font-bold text-secondary lg:stat-value">
                  14/02/2027
                </div>
                <div className="stat-desc">arttoy{"'"} creation date</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdentityCard;
