import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import { AiOutlinePlus } from 'react-icons/ai'
import axios from "axios";

function FileUpload({postContent, setPostContent}) {
  const [Images, setImages] = useState([]);
  const [attachment, setAttachment] = useState("");
  const fileInput = useRef();


  const dropHandler = (file) => {
    console.log(file[0]);

  };
  const deleteHandler = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
  };


  const onImgChange = (event) => {
    const { target: { files } } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {

      const { target: { result } } = finishedEvent;
      
      setAttachment(result);
      setPostContent({
        ...postContent,
        fileUrl : result
      })
    }

  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around",margin:"2vh auto" }}>

      <div
        style={{
          width: 150,
          height: 150,
          border: "1px solid lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}

      >
        <label for="input-file">
        <AiOutlinePlus size={60}  />
        </label>
        <input  id="input-file"  style={{ opacity: 0, width: 0, }} type="file" accept="image/*" ref={fileInput} onChange={onImgChange} />
        
      </div>

{  attachment !== "" &&    (<div
        style={{
          display: "flex",
          width: "150px",
          height: "150px",
          overflow: "hidden",
        }}
      >
       
          <div>
            <img
              style={{ minWidth: "150px", width: "150px", height: "150px" }}
              src={attachment}
            />
          </div>
    
      </div>)
    }


    </div>
  );
}

export default FileUpload;