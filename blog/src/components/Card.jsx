export default function Card({ data, handlerClick }) {

  return (
    <div
      className="flex border gap-[20px] w-[392px] box-border  p-[16px] flex-col"
      onClick={() => handlerClick(data.id)}
    >
      <div className="">
        <img className="rounded-[6px]" src={data.social_image} alt="" />
        <span className="bg-[#4b6bfb0d] text-[#4B6BFB] w-fit rounded-[6px] box-border py-[4px] px-[10px]">
          {data.tags}
        </span>
        <div className="">{data.title}</div>
        <div className="flex flex-wrap">{data.readable_publish_date}</div>
      </div>
    </div>
  );
}
