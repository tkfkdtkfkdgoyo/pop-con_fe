import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";
import AdminCardHeart from "../../assets/Icons/Card/AdminCardHeart.svg"


const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`; // page에서 사용

const CardEach = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 300px;
  min-width:400px;
  border-radius: 16px;
  cursor: pointer;
  margin: 9px;
  box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background-image: url('/Cardrose.jpg');
  background-image: url(" ${(props) => props.image} ");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: none;
  border-radius: 16px;
  //margin-bottom: 15px;

  height: 200px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
  line-height: 18px;
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 5px;

`;
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 7px;
  margin-right: 4px;
  margin-top: 4px;
`;

const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다 
`;

const AdminCard = ({ image, title, space, floor, area, onClick}) => {
  const navigate = useNavigate();
  return (
    <CardEach onClick={onClick}>
      <Thumbnail image={image} />
      <TitleWrapper>
        <Typo weight='600'>{title}</Typo>
      </TitleWrapper>
      <TextBox>
        <TextWrapper>
          <Margin height="6" />
          <Typo size="small" color="gray">{space}</Typo>
          <Margin height='5'/>
          <Typo size="small" color="gray">{floor}</Typo>
          <Margin height='5'/>
          <Typo size="small" color="gray">{area}</Typo>
        </TextWrapper>
        <TextWrapper>
          <Icon src={AdminCardHeart} alt='logo' onClick={() => navigate('/main')} />
        </TextWrapper>
      </TextBox>
      <Margin height='10'/>
    </CardEach>
  );
};

export default AdminCard;