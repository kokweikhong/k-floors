import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  useController,
} from "yet-another-react-lightbox/core";

export default function NextJsImage(...[image]) {
  const { getLightboxProps } = useController();
  const cover =
    isImageSlide(image) &&
    isImageFitCover(image, getLightboxProps().carousel.imageFit);

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <Image
        // fill
        alt=""
        src={image}
        loading="eager"
        width="500"
        height="500"
        // placeholder="blur"
        draggable={false}
        style={{
          objectFit: cover ? "cover" : "contain",
          width: "100%",
          height: "100%",
        }}
        // sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}
