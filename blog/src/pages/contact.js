import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="">
        <h2 className="text-[36px] font-semibold">Contact Us</h2>
        <p className="w-[620px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <div className="flex">
          <div className="p-[16px] box-border cBorder w-[294px]">
            <h3>Address</h3>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
          <div className="p-[16px] box-border cBorder w-[294px]">
            <h3>Contact</h3>
            <p>+976 99112233 info@email.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
