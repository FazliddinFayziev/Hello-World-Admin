import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { useGlobalContext } from '../context/context';

const EditImageUpload = () => {
    const { singleItem, setSingleItem } = useGlobalContext();
    const { images } = singleItem;

    const [singleImage, setSingleImage] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const [chosenImagePreview, setChosenImagePreview] = useState(null);

    const handleImageUpload = () => {
        if (selectedImage) {
            setSingleItem({ ...singleItem, images: [...images, selectedImage] });
            setSingleImage([...singleImage, chosenImagePreview])
            setSelectedImage(null);
            setChosenImagePreview(null);
        }
    };

    const handleImageDelete = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setSingleItem({ ...singleItem, images: updatedImages });
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
                {singleImage.length > 0 && singleImage.map((imageUrl, index) => (
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

export default EditImageUpload