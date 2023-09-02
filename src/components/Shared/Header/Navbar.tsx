import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-neutral rounded-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <HiMenuAlt2 size={20} />
            </label>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-secondary rounded-box z-[1] w-52 uppercase shadow"
            >
              <li>
                <a className="hover:text-primary font-bold">identity</a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            Jaothui - ARTTOY
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <BiSearchAlt2 size={20} />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content bg-secondary z-[1] rounded-xl p-2 uppercase shadow"
            >
              <li>
                <div className="join">
                  <input
                    type="text"
                    className="input input-bordered join-item input-sm text-primary-content"
                    placeholder="NFC ID"
                  ></input>
                  <button className="join-item btn btn-sm btn-primary">
                    GO!
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
