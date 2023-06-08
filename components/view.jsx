'use client';
import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  width:100%;
  height:100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Features = styled.div`
  position: relative;
  display: flex;
  width:100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Demo = styled.div`
  position: relative;
  display: flex;
  width:100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  width:100%;
  flex-direction: row;
  padding-bottom: 30px;
`

export const PrivacyPolicy = styled.div`
  position: relative;
  display: flex;
  width:100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PrivacyPolicyMarginStyle = styled.div`
  margin: 0 20%;

  @media (max-width: 768px) {
    margin: 0 10%;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    margin: 0 20%;
  }

  @media (min-width: 1280px) {
    margin: 0 30%;
  }
`;

export const CenterAlignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  height: calc(100vh - 115px);
`;

export const SupportContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSupportContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const RightSupportContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

//components for homepage
export const CenterAlignContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  height: 100vh;
`;

export const LeftRightContainerCW = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10%;
  }
`;

export const LeftRightContainerCCW = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 30px;

@media (max-width: 768px) {
flex-direction: column-reverse;
  align-items: center;
  gap: 10%;
}
`

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  margin-left: 3%;
  margin-right: 3%;

  @media (max-width: 768px) {
    order: 2;
    align-self: center;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3%;
  margin-right: 3%;

  @media (max-width: 768px) {
    order: 1;
    align-self: center;
  }
`;