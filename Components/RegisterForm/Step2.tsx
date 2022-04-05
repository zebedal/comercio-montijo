import Row, { Justify } from "LayoutComponents/Row/Row";
import React, { useState } from "react";
import UploadImage from "./UploadImage";
export interface SelectedImage {
  name: string;
  size: number;
  type: string;
  url: string;
}

const Step2 = () => {
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);

  const onSelect = (data: any) => {
    console.log("Select files", data);
  };
  const onRemove = (id: any) => {
    console.log("Remove image id", id);
  };

  const onUpload = (data: any) => {
    console.log("Upload files", data);
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage: SelectedImage = {
        name: event.target.files[0].name,
        size: event.target.files[0].size,
        url: URL.createObjectURL(event.target.files[0]),
        type: event.target.files[0].type,
      };
      setSelectedImages([...selectedImages, selectedImage]);
    }
  };

  const onImageDelete = (imgName: string) => {
    const filteredImages = selectedImages.filter((img) => {
      return img.name !== imgName;
    });
    setSelectedImages(filteredImages);
  };

  return (
    <>
      <Row wrap justify={Justify.Center} gap={20}>
        <UploadImage
          onChange={onImageChange}
          onDelete={onImageDelete}
          selectedImage={selectedImages[0]}
        />
        <UploadImage
          onChange={onImageChange}
          onDelete={onImageDelete}
          selectedImage={selectedImages[1]}
        />
        <UploadImage
          onChange={onImageChange}
          onDelete={onImageDelete}
          selectedImage={selectedImages[2]}
        />
        <UploadImage
          onChange={onImageChange}
          onDelete={onImageDelete}
          selectedImage={selectedImages[3]}
        />
        <UploadImage
          onChange={onImageChange}
          onDelete={onImageDelete}
          selectedImage={selectedImages[4]}
        />
        <UploadImage
          onChange={onImageChange}
          onDelete={onImageDelete}
          selectedImage={selectedImages[5]}
        />
      </Row>
    </>
  );
};

export default Step2;
