import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import SliderY from "../../Components/WrapperY/SliderY";
import LargeCard from "../../Components/Card/LargeCard";
import NavigationBar from "../../Components/Navigate/Navigate";
import PopupCard from "../../Components/Card/PopupCard";
import Margin from "../../Components/Margin/Margin";
import { useEffect } from "react";
import * as api from "../../api";
import { addPointerEvent } from "framer-motion";
import { useState } from "react";
const Title = styled.div`
  margin: 5%;
`;
const Wrapper = styled.div`
  margin: 20px;
`;
const Mypoprequest = () => {
  const [data, setData] = useState([]);

  const getRequest = async () => {
    const user = localStorage.getItem("Pk");
    if (user) {
      const list = await api.getMylikepopupRequest(user);

      setData(list);
    }
  };
  useEffect(() => {
    getRequest();

    console.log(data);
  }, []);

  return (
    <>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          팝업 요청
        </Typo>
      </Title>
      <Horizon width="350px"></Horizon>
      <Margin height="20" />
      {data?.map((item) => (
        <LargeCard
          image={"https://popcon.store" + item?.popup_image01}
          title={item?.popup_name}
          popcategory={item?.popup_category}
          detail={1}
          space={item?.popup_detailplace}
          date={item?.popup_date}
        />
      ))}

      <NavigationBar />
    </>
  );
};

export default Mypoprequest;
