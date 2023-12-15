import { Facebook, Ig, In, Twit } from "./svg/Logo";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex justify-between w-10/12">
        <div className="w-[26%]">
          <h3 className="mb-[12px]">About</h3>
          <p className=" mb-[24px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div>
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-4">
          <Facebook />
          <Twit />
          <Ig />
          <In />
        </div>
      </div>
      <div></div>
    </footer>
  );
}
