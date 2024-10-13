import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo (1).png";
import SignInOut from "../Auth/SignInOut";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-5 lg:px-0">
      <div className=" flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} className="mr-5 " alt="logo" />
            {/* <Image src="/logo.svg" alt="Eventry" width={135} height={135} /> */}
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <SignInOut />
          </li>
          <li>
            {" "}
            <Link href="/about">About</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
