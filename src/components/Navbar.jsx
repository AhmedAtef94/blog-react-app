import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div
      className="fixed-top border darck"
      style={{ backgroundColor: "#032930" }}
    >
      <nav className="navbar">
        {/* <div>
          <img
            src="logo192.png"
            width={30}
            height={30}
            alt="logo"
            className="ms-2"
          />
        </div> */}
        <i
          style={{ color: "#31D2F2" }}
          class="fa-brands ms-4 fs-2 fa-slack"
        ></i>
        <Link
          style={{ color: "white" }}
          className="nav-link active align-start"
          to="/"
        >
          Home{" "}
        </Link>
        <div>
          {user && (
            <>
              <span style={{ color: "white" }} className="pe-4">
                Signed is as {user.displayName || user.email}
              </span>
              <button
                className="btn btn-outline-info btn-sm me-3"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
