import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-5 lg:px-0">
      <div className=" flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/" className="text-xl font-bold">
            Logo
            {/* <Image src="/logo.svg" alt="Eventry" width={135} height={135} /> */}
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
