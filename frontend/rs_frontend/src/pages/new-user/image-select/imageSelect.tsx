import React, { useState } from "react";
interface ImageInputProps {
    onImageSelect: (image: File | null) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageSelect }) => {
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (e: any) => {
        const imageFile = e.target.files?.[0] || null;
        setImage(imageFile);
        onImageSelect(imageFile);
    };


    return (
        <div className='form-item'>
            <input 
                className='form-control' 
                type='file' accept='image/*' 
                name='imageProfile' 
                id='profilePicture' 
                placeholder='Profile Picture' 
                onChange={handleImageChange}    
            />
            {image && (
                <img 
                    src={URL.createObjectURL(image)} 
                    alt='profile'
                    width='100'
                />
            )}
        </div>
    );
}

export default ImageInput;