import NoResults from "@/components/NoResults";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import ButtonOfCard from "./ButtonOfCard";
import { Product } from "@/types/type";

interface ParamsProps {
  view?: string | undefined;
}
export default async function ProductLists({
  items,
  searchParams,
}: {
  items: Product[];
  searchParams: Promise<ParamsProps>;
}) {
  const { view } = await searchParams;

  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return (
    <div
      className={`${
        view
          ? "space-y-4"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      }`}
    >
      {items.map((item) => (
        <div
          className={`border overflow-hidden rounded-2xl hover:shadow-[0_3px_10px_rgba(0,0,0,0.2)] ${
            view ? "flex justify-between" : ""
          }`}
          key={item._id}
        >
          {item.photoUrls?.[0] && (
            <Link
              href={`/marketplace/product/${item._id}`}
              className={`block overflow-hidden ${
                view ? "w-1/3 " : "w-full h-60"
              }`}
            >
              <div className="relative transition-transform duration-300 ease-in-out hover:scale-110 h-full w-full">
                <Image
                  className="object-center"
                  fill
                  src={item.photoUrls[0]}
                  alt={item.productName}
                />
              </div>
            </Link>
          )}
          <div className={`${view ? "w-2/3 flex flex-col" : ""} p-4`}>
            <div className={`${view && "grow"}`}>
              <Link href={`/marketplace/product/${item._id}`}>
                <h3 className=" font-medium hover:decoration-green-600 hover:underline">
                  {item.productName}
                </h3>
              </Link>

              <h4 className="text-[#3D9958] font-medium flex items-center mt-3 gap-0.5">
                {item.price}.00 <FaBangladeshiTakaSign />{" "}
              </h4>
              {/* description */}
              {view && (
                <>
                  <div className="border-t mt-3 py-3 font-nunito">
                    <p className="line-clamp-3">{item.description}</p>
                  </div>
                </>
              )}
            </div>

            {/* all buttons */}
            <ButtonOfCard item={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
