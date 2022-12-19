import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import apImage from "../public/ap1.jpg";
const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="md:w-64 w-8/9 overflow-hidden pt-5">
      <div className="relative pb-11/12">
        <Image
          layout="fill"
          objectFit="cover"
          className="absolute h-full w-full rounded-lg"
          src={img}
          alt="Sunset in the mountains"
        />
      </div>

      <div className="py-2">
        <p className=" font-semibold ">
          {title.length > 20 ? title.substring(0, 20) : title}
        </p>
        <p className=" text-sm ">{location}</p>
        <p className=" text-sm ">9-15 Jul</p>
        <div className="flex pt-2 ">
          <p className="font-bold">${price}</p>
          <p className="pl-1"> night</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
