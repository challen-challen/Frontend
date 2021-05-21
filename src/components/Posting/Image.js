import React, {useState} from "react";
import styled from "styled-components";
import {AiFillCloseCircle} from "react-icons/ai";
import {MdWallpaper} from "react-icons/md";

function Image() {
    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage(e.target.result);
                setIsUploaded(true);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <Layout>
                    <div className="image-upload">
                        {isUploaded ? (
                            <ImagePreview>
                                <AiFillCloseCircle
                                    size="30"
                                    id="close-icon"
                                    onClick={() => {
                                        setIsUploaded(false);
                                        setImage(null);
                                    }}
                                />
                                <img id="uploaded-image" src={image} alt="uploaded-img"/>
                            </ImagePreview>
                        ) : (
                            <BoxUpload>
                                <ImageLabel htmlFor="upload-input" style={{ margin: 'auto auto' }}>
                                    <MdWallpaper size="40" style={{ cursor: 'pointer' }} />
                                </ImageLabel>
                                <input
                                    id="upload-input"
                                    type="file"
                                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                            </BoxUpload>
                        )}
                    </div>

        </Layout>
    );
}

const Layout = styled.div`
margin: 3vh 0;
  height: 100%;
  width: 100%;
  background: white;
`;
export const BoxUpload = styled.div`
  display: flex;
  width: 180px;
  height: 200px;
  border: 1px dashed gray;
  background: #ECF2EC;
  border-radius: 3px;
`;
export const ImageLabel = styled.label`
  margin: auto auto;
`;

export const ImagePreview = styled.div`
  position: relative;
  #uploaded-image {
  width: 180px;
  height: 200px;
    object-fit: cover;
    border-radius: 3px;
  }
  #close-icon {
   position: relative;
  cursor: pointer;
  z-index: 2;
  top: -165px;
  right: -175px;
 
    opacity: .6;
    
    :hover {
    opacity: 1;
  }
`;

export default Image;