import React, { useState } from "react";
import Dropzone from "react-dropzone";
import {AiOutlinePlus} from'react-icons/ai'
import axios from "axios";

function FileUpload() {
    const [Images, setImages] = useState([]);

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: { "content-type": "multipart/form-data" },
        };
        formData.append("file", files[0]);

        axios.post("http://localhost:5000/api/posts/upload", formData, config).then((response) => {
            if (response.data.success) {
                console.log(response.data);
                setImages([...Images, response.data.filePath]);
            } else {
                alert("파일을 저장하는데 실패했습니다.");
            }
        });
    };
    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images];
        newImages.splice(currentIndex, 1);
        setImages(newImages);
    };
    return (
        <div style={{ display: "flex", justifyContent: "space-between",margin:"2vh auto 3vh auto" }}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div
                            style={{
                                width: 250,
                                height: 200,
                                border: "1px solid lightgray",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                           <AiOutlinePlus size={30} />
                        </div>
                    </section>
                )}
            </Dropzone>
            <div
                style={{
                    display: "flex",
                    width: "350px",
                    height: "200px",
                    overflowX: "scroll",
                }}
            >
                {Images.map((image, index) => (
                    <div onClick={() => deleteHandler(image)} key={index}>
                        <img
                            style={{ minWidth: "300px", width: "300px", height: "240px" }}
                            src={`http://localhost:5000/${image}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileUpload;