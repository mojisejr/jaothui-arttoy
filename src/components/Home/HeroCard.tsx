const HeroCard = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="/images/toy1.jpg" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Jaothui Arttoy</h2>
          <p>NFC + NFT = 🚀🚀🚀🚀🚀🚀</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Find Yours!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
