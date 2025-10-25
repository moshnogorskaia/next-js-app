'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name}) {
    const [pickedImage, setPickedImage] = useState(null);
    const inputRef = useRef(null);

    function handlePckClick() {
        inputRef.current.click();
    }

    function handleImagePick(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
                {!pickedImage && <p>No image picked yet.</p>}
            </div>
            <input
                type="file"
                accept="image/*" 
                id="image"
                name={name}
                className={classes.input}
                ref={inputRef}
                onChange={handleImagePick}
                required
            />
            <button type="button" className={classes.button} onClick={handlePckClick}>Upload</button>
        </div>
    </div>
  );
}
