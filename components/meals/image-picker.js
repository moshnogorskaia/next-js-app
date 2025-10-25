'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name}) {
    const inputRef = useRef(null);

    function handlePckClick(event) {
        event.preventDefault();
        const input = document.getElementById('image');
        input.click();
    }

  return (
    <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <input type="file" accept="image/*"  id="image" name={name} className={classes.input} />
            <button type="button" className={classes.button} onClick={handlePckClick}>Upload</button>
        </div>
    </div>
  );
}
