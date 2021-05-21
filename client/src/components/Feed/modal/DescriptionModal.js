import React from 'react';
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import DescriptionContent from "./DescriptionContent";

function DescriptionModal({closeModal}) {
    const array=["사용하지 않는 가전제품의 플러그 뽑기","TV 사용 1시간 줄이기","눈 건강을 위한 하루1시간 소등하기"]
    return (
        <Dimmer>
            <Container>
                <MdClose size={20} style={{margin: '1.5vh 1.5vw 0 auto', cursor: 'pointer'}} onClick={closeModal}/>
                <Content>
                    <div>어떤 챌린지들을 할 수 있을까요?</div>
                    <DescriptionContent title="전기 부문" array={array}/>
                </Content>
            </Container>
        </Dimmer>
    );
}

const Dimmer = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 50%;
  height: 400px;
  position: absolute;
  top: 23%;
  left: 25%;
  background-color: white;
  z-index: 99;
  box-shadow: 0px 1px 1px rgba(15, 15, 15, 0.2);
   overflow-y: scroll;
    @media (max-width: 768px) {
    width: 75%;
    height: 500px;
    left: 10%;
    top: 25%;
    overflow-y: scroll;
  }
;
`
const Content = styled.div`
display: 90%;
margin: 1vh auto;
`;
export default DescriptionModal;