import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './propertiesImages.scss'; // Importa los estilos SCSS aquí
import ProperiesService from '../../services/properies.service';
import { Property } from '../../models/Property.model';
// import { Image } from './../../models/Images.model';

interface Image {
  property: Property;
  file: File;
  preview: string;
}

function ImageUpload(props:any) {
  const {serveImages} = props;
  const {propertyRef}=props;
  const [images, setImages] = useState<Image[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(propertyRef)
      const updatedImages: Image[] = acceptedFiles.map((file) => ({
        property: propertyRef,
        file,
        preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...updatedImages]);


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

  const submitImages = () => {
    images.forEach(image => {
      let formData = new FormData();
      formData.append('image', image.file);
      formData.append('property', image.property.id.toString());
      ProperiesService.createImages(formData);
    });
  };



  useEffect(() => {
    if(propertyRef){
    }
    if(serveImages){
      let prevIm:Image[] = serveImages.map((image:any) => (
        image.preview = image.image,
        image.file = image.image
      ))
      console.log(serveImages);
      setImages(serveImages);
    }
  }, [propertyRef, serveImages]);


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
      <div>
        <button onClick={submitImages}>Submit Images</button>
      </div>
    </div>
  );
}

export default ImageUpload;
