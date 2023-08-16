import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

function ImageUpload() {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [chosenImagePreview, setChosenImagePreview] = useState(null);

    const handleImageUpload = () => {
        if (selectedImage) {
            setUploadedImages([...uploadedImages, chosenImagePreview]);
            setSelectedImage(null);
            setChosenImagePreview(null);
        }
    };

    const handleImageDelete = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    const handleImageSelection = (e) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);
        setChosenImagePreview(URL.createObjectURL(imageFile));
    };

    return (
        <div className="image-upload-container">
            <div className="chosen-image-preview">
                {chosenImagePreview && <img src={chosenImagePreview} alt="Chosen" />}
            </div>
            <div className="image-upload-main">
                <label className="custom-file-input">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelection}
                    />
                    <span>Choose Image</span>
                </label>
                <button onClick={handleImageUpload}>Upload</button>
            </div>
            <div className="uploaded-images">
                {uploadedImages.map((imageUrl, index) => (
                    <div className="uploaded-image" key={index}>
                        <img src={imageUrl} alt={`Uploaded ${index}`} />
                        <button onClick={() => handleImageDelete(index)}>
                            <MdDelete />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageUpload;
