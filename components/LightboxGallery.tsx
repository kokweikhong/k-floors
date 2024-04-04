import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import React, { Dispatch, SetStateAction } from "react";

import NextJsImage from "./NextJsImage";

export interface ILightboxGalleryProps {
  images: {
    src: string;
    width?: number;
    height?: number;
  }[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LightboxGallery: React.FC<ILightboxGalleryProps> = ({
  images,
  open,
  setOpen,
}) => {
  return (
    <div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

export default LightboxGallery;
