let data = [
  {
    img: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/827/65/320/firewatch-4k-best-wallpaper-preview.jpg",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/dragon-ball-chromebook-wallpaper.jpg",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "https://i.pinimg.com/736x/ea/cd/ff/eacdff1ad46e3270c1af80f0ff7d0880.jpg",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
export default function Trending() {
  return (
    <div className="flex gap-[30px]  flex-col justify-start">
      <h2 className="flex justify-start text-[30px] font-bold">Trending</h2>
      <div className="flex gap-[20px]">
        {data.map((e) => {
          return (
            <div
              key={v4()}
              className="w-[288px] cBorder  h-[320px] bg-cover  "
              style={{ backgroundImage: `url(${e.img})` }}
            >
              <div className=" mx-[26px] h-[320px] gap-[16px] flex flex-col justify-end">
                <span className="bg-[#4B6BFB] text-[#FFFFFF] w-fit py-[4px] px-[10px] rounded-[6px] ">
                  {e.category}
                </span>
                <p className=" mt-[16px] mb-[26px] text-[white] ">{e.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
