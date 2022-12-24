import React from "react";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid; */
`;

const StyledAvatar = styled.div`
  min-width: 20px;
  border: 1px solid;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const StyledLine = styled.div`
  position: "absolute";
  right: 0;
  bottom: 0;
  /* height: 10px;
  width: 10px; */
  /* background-color: red; */
`;

const Member2 = (member) => {
  const defaultAvatar = <AccountCircleIcon style={{ fontSize: 50 }} />;
  const { name, avatar, dob } = member;
  return (
    <StyledWrapper>
      <div
        style={{
          position: "static",
          height: 10,
          width: 10
          // backgroundColor: "red"
        }}
      />
      <StyledAvatar>
        {avatar ? <img src={avatar} alt="" /> : defaultAvatar}
      </StyledAvatar>
      <span>{name}</span>
      <span>{dob}</span>
    </StyledWrapper>
  );
};

export default Member2;
