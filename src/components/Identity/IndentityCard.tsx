import Link from "next/link";
import {
  FcBiotech,
  FcNfcSign,
  FcElectronics,
  FcPlanner,
  FcLink,
} from "react-icons/fc";
const IdentityCard = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-base-200">
        <div className="card my-2 w-11/12 bg-base-100 xl:my-6 xl:w-1/2">
          <h2 className="card-title px-5 py-5 text-5xl font-bold">
            Jaothui Arttoy v.0.1{" "}
            <div className="badge badge-primary badge-lg">new</div>
          </h2>

          <figure>
            <img src="/images/toy1.jpg" />
          </figure>
          <div className="card-body">
            <div className="card-title">information</div>
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FcNfcSign size={30} />
                </div>
                <div className="stat-title text-primary">Serial No.</div>
                <div className="stat-value text-secondary">THUI-00</div>
                <div className="stat-desc">arttoy{"'"}s Serial number</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FcElectronics size={30} />
                </div>
                <div className="stat-title text-primary">Model No.</div>
                <div className="stat-title font-bold text-secondary xl:text-[2rem]">
                  V0-00000000000-000
                </div>
                <div className="stat-desc">arttoy{"'"}s Model No.</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FcBiotech size={30} />
                </div>
                <div className="stat-title text-primary">Signature Id.</div>
                <div className="stat-title font-bold text-secondary xl:text-[2rem]">
                  000000000000000
                </div>
                <div className="stat-desc">arttoy{"'"}s NFC signature</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FcPlanner size={30} />
                </div>
                <div className="stat-title text-primary">Created Date</div>
                <div className="stat-title font-bold text-secondary xl:text-[2rem]">
                  Sat 05, 2023
                </div>
                <div className="stat-desc">arttoy{"'"} creation date</div>
              </div>
            </div>
            <Link
              href="https://www.bkcscan.com/"
              className="btn btn-ghost text-base-300"
            >
              View On BKCScan <FcLink size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdentityCard;
