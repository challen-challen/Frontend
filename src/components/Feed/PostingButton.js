import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function PostingButton() {
    return (
        <ButtonWrapper to="/posting">
           <Button type="button" value="참여하기" />
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled(Link)`
 position: fixed;
  bottom: 30px;
  right: 30px;
`;
const Button = styled.input`
width: 100px;
height: 40px;
border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  :focus {
    outline: none;
  }
  background-color: #40804F;
`;
export default PostingButton;