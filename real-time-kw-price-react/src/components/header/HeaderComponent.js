import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className="HeaderComponent">
      <header className="bg-[#0f172a]">
        <div className="max-w-screen mx-7">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-4">
              <Link
                className="flex items-center text-[#ffd700]"
                to="/home"
                mx-5
              >
                <div className="mr-1">
                  <img
                    src="images\real-time-kw-price-logo.png"
                    alt="Home"
                    className="h-16 w-auto fill-current text-[#ffd700]"
                  />
                </div>

                <span className="font-sans text-2xl font-extrabold">
                  RealTimeKwPrice
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className=" text-base text-[#cbd5e1] hover:text-[#94a3b8] hover:text-lg"
                      href="#"
                    >
                      Elbolag
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-base text-[#cbd5e1] hover:text-[#94a3b8] hover:text-lg"
                      href="#"
                    >
                      Elområden
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-base text-[#cbd5e1] hover:text-[#94a3b8] hover:text-lg"
                      href="#"
                    >
                      Elpriser
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-base text-[#cbd5e1] hover:text-[#94a3b8] hover:text-lg"
                      href="#"
                    >
                      Om oss
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <Link
                  className="rounded-md px-5 py-2.5 text-sm font-medium text-white bg-[#ffd700] hover:bg-[#ccac00] sm:gap-4"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="rounded-md px-5 py-2.5 text-sm font-medium text-white bg-[#04a4ff] hover:bg-[#0383cc] sm:gap-4"
                  to="/register"
                >
                  Register
                </Link>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;
