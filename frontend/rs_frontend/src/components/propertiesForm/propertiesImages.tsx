import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './propertiesImages.scss'; // Importa los estilos SCSS aquí

type ImageFile = File & {
  preview: string;
};

function ImageUpload() {
  const [images, setImages] = useState<ImageFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages: ImageFile[] = acceptedFiles.map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  } as any);

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className='properties-images'>
      <h3 className='title'>Upload Images</h3>
      <p className='subtitle'>Submit the images of the property</p>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p className='dropzone-text'>Drag & drop some images here, or click to select files</p>
      </div>
      <div className='dropzone-preview'>
        {images.map((image, index) => (
          <div className='image-preview' key={index}>
            <img
              src={image.preview}
              alt={`Image ${index}`}
            />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
