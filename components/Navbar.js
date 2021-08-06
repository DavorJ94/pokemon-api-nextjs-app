import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <a>Homepage</a>
      </Link>
    </div>
  );
};

export default Navbar;
