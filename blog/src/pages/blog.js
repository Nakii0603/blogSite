import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";

let api = "https://dev.to/api/articles";

export default function Home() {
  const [data, setData] = useState([]);
  const [articleCount, setArticleCount] = useState(12);
  const router = useRouter();

  const getData = async () => {
    let response = await axios.get(api);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [articleCount]);

  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <div className="flex w-[1280px] gap-[20px] justify-center flex-wrap">
        {data.map((e) => {
          return (
            <a
              href={`/${e.id}`}
              className="flex border gap-[20px] w-[392px] box-border  p-[16px] "
              onClick={() => handlerClick(e.id)}
            >
              <div className="">
                <img className="rounded-[6px]" src={e.social_image} alt="" />
                <span className="bg-[#4b6bfb0d] text-[#4B6BFB] w-fit rounded-[6px] box-border py-[4px] px-[10px]">
                  {e.tags}
                </span>
                <div className="">{e.title}</div>
                <div className="flex flex-wrap">{e.readable_publish_date}</div>
              </div>
            </a>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
