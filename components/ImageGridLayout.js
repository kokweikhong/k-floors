import Image from "next/image";

export default function ImageGridLayout({ images }) {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-2 h-[70vh] w-auto mx-auto">
      <div className="row-span-2 row-start-1">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width="500"
          height="500"
          className="object-cover w-full h-full rounded-tl-[15px]"
        />
      </div>
      <div className="col-start-2 row-start-1">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          width="500"
          height="500"
          className="object-cover w-full h-full rounded-tr-[15px]"
        />
      </div>
      <div className="col-start-2 row-start-2">
        <Image
          src={images[2].src}
          alt={images[2].alt}
          width="500"
          height="500"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="row-span-2 row-start-3 col-span-full">
        <Image
          src={images[3].src}
          alt={images[3].alt}
          width="500"
          height="500"
          className="object-cover w-full h-full rounded-b-[15px]"
        />
      </div>
    </div>
  );
}
