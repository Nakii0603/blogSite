import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar";
export default function Detail() {
  const params = useParams();

  const [data, setData] = useState(null);
  const fetchData = async () => {
    let ap = `https://dev.to/api/articles/${params?.id}`;
    let response = await axios.get(ap);
    setData(response.data);

  };
  useEffect(() => {
    if (params) {
      fetchData();
    }
  }, [params]);



  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col container">
        <Navbar />
        {data && (
          <div className="flex items-center w-[800px] flex-col">
            <img src={data.social_image} />
            <p>{data.title}</p>
            <p>{data.body_markdown}</p>
            <p>ç</p>
          </div>
        )}
      </div>
    </div>
  );
}
