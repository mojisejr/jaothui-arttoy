import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-full max-w-md" src="/images/toy1.jpg" alt="image" />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Jaothui ART-<span className="text-primary">TOY</span>
            </h1>
            <p className="py-6">
              Jaothui Arttoy represents a fusion of art and cutting-edge
              technology. By embedding NFC and RFID chips within this buffalo
              art toy, you can directly scan and verify its certification data
              on the Bitkub blockchain. Bridging the virtual world with the real
              one, the interplay of NFC and NFT enables you to transparently and
              authentically authenticate the artwork. With Jaothui Arttoy, you
              {"'"}ll experience the creation of unique art and connect with the
              powerful blockchain world in this compact masterpiece.
            </p>
            <button className="btn btn-primary">Coming very soon..</button>
            {/* <div className="join">
              <input
                type="text"
                placeholder="NFC_ID"
                className="input join-item"
              ></input>
              <button className="btn join-item btn-primary font-bold">
                Go!
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
