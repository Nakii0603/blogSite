import { Logo, Search } from "./svg/Logo";
export default function Navbar() {
  return (
    <>
      <div className="flex container my-[32px] justify-between ">
        <Logo />
        <div className="flex gap-[40px]">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="flex items-center bg-[#F4F4F5] p-2 re ">
          <input type="search" className="bg-[#F4F4F5]" placeholder="search " />
          <Search />
        </div>
      </div>
    </>
  );
}
