let data = [
  {
    img: "https://images-ext-1.discordapp.net/external/Y0eAF6CrFPXxUgZtYxL4Fz-mb0y218L6uM5pnybi6mo/%3FExpires%3D1702857600%26Signature%3DTEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4/https/s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?format=webp&width=1005&height=671",
    category: "Technology",
    text: "Grid system for better Design User Interface",
    date: "August 20, 2022",
  },
];
import photo1 from "../../public/photo1.png";
import photo2 from "../../public/photo2.png";
import { v4 } from "uuid";

export default function Hero() {
  return (
    <>
      <div className="">
        {data.map((e) => {
          return (
            <div key={v4()}
              className="w-[1200px] mb-2 rounded-[12px] relative h-[600px] bg-cover"
              style={{ backgroundImage: `url(${e.img})` }}
            >
              <div className="bg-white rounded-[12px] h-fit absolute bottom-0 box-border p-[40px]  m-[13px] w-[600px]  :">
                <span className="  bg-[#4B6BFB] text-[#FFFFFF] py-[4px] px-[10px] rounded-[6px] ">
                  {e.category}
                </span>
                <p className="w-[80%] mt-[16px] leading-[40px] mb-[26px] text-[36px] font-semibold ">
                  {e.text}
                </p>
                <p>{e.date}</p>
              </div>
            </div>
          );
        })}
        <div className="flex justify-end gap-2 ">
          <img src={photo1.src} alt="" />
          <img src={photo2.src} alt="" />
        </div>
      </div>
    </>
  );
}
