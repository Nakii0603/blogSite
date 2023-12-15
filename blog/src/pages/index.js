import axios from "axios";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Create from "@/components/Create";
import { useEffect, useState } from "react";
import Trending from "@/components/Trending";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";

let api = "https://dev.to/api/articles";

export default function Home() {
  const [data, setData] = useState([]);
  const [articleCount, setArticleCount] = useState(6);
  const router = useRouter();

  const getData = async () => {
    let response = await axios.get(api);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [articleCount]);

  const handleLoadMore = () => {
    setArticleCount((prevCount) => prevCount + 3);
  };
  const handlerClick = (id) => {
    router.push(`/${id}`);
  };

  return (
    <div className="flex flex-col gap-[100px] items-center">
      <Navbar />
      <Hero />
      <Trending />
      <div className="justify-center flex flex-col">
        <div className="text-[24px]">All Blog Post</div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {data.slice(0, 2).map((e) => (
              <p>{e.tags}</p>
            ))}
          </div>
          <div>
            <button className="">View All</button>
          </div>
        </div>
        <div className="flex gap-[30px] w-[1240px]  flex-wrap">
          {data.slice(0, articleCount).map((el) => (
            <Card handlerClick={handlerClick} data={el} />
          ))}
        </div>
        <button onClick={handleLoadMore} className="">
          Load more
        </button>
      </div>
      <Footer />
    </div>
  );
}
