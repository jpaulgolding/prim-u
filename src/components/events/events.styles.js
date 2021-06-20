import styled from "styled-components";
// import { fontSize, lineHeight, space } from "styled-system";
// import { GlobalSubtitle } from "../global-components";
import GlobalCard from "../global-components/global-card/globalcard";

export const Container = styled.main`
  display: grid;
  grid-auto-rows: 1fr;
  row-gap: 60px;
  padding: 60px 4vw 20px;
  @media screen and (max-width: 1124px) {
    row-gap: 40px;
  }
<<<<<<< HEAD
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
    row-gap: 20px;
=======
  @media only screen and (max-width: 375px) {
    width: 352px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const Title = styled(GlobalSubtitle)`
  text-transform: uppercase;
  margin-left: 60px;
  margin-top: 40px;
  align-self: flex-start;
  z-index: 10;

  ${lineHeight};
  ${space};
  ${fontSize};
  @media only screen and (max-width: 682px) {
    margin: 30px 0 auto 20px;
    line-height: 39.84px;
  }
  @media only screen and (max-width: 375px) {
    margin: 30px 0 0 20px;
    width: 313px;
    height: 40px;
>>>>>>> 3cdcd7c75ba6945108ad9a750c297ab9f24f32ba
  }
`;

export const EventCard = styled(GlobalCard)`
  && {
    min-height: 460px;
    padding: 40px 4vw;
  }
  & .title {
    margin-bottom: 209px;
  }
<<<<<<< HEAD
  @media screen and (max-width: 1124px) {
    & .title {
      margin-bottom: 119px;
    }
=======
  @media only screen and (max-width: 515px) {
    margin: 130px auto 16px auto;
    max-width: 313px;
  }
  @media only screen and (max-width: 375px) {
    margin: 173px 20px 16px 20px;
    max-width: 313px;
    line-height: 20px;
>>>>>>> 3cdcd7c75ba6945108ad9a750c297ab9f24f32ba
  }
  @media screen and (max-width: 640px) {
    && {
      padding: 30px 20px 20px;
      row-gap: 16px;
    }
    & .body {
      max-width: 350px;
    }
    & .title {
      margin-bottom: 173px;
    }
    & .text {
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media only screen and (max-width: 375px) {
    position: static;
    justify-self: flex-end;
    margin: 0 20px;
    width: 313px;
  }
`;

// export const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   display: grid;
//   grid-gap: 60px;
//   grid-template-columns: repeat(1, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   background: white;
//   margin: 60px 0 0 0;
// `;

// export const Card = styled.div`
//   max-width: 1318px;
//   height: 460px;
//   border-radius: 25px;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;

//   &:after {
//     content: "";
//     width: 100%;
//     height: 460px;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     background: rgba(0, 0, 0, 0.5);
//   }
//   @media screen and (max-width: 500px) {
//   }
// `;

// export const ImageWrapper = styled.div`
//   width: 100%;
// `;

// export const Title = styled(GlobalSubtitle)`
//   text-transform: uppercase;
//   margin-left: 60px;
//   margin-top: 40px;
//   align-self: flex-start;
//   z-index: 10;

//   ${lineHeight};
//   ${space};
//   ${fontSize};
//   @media only screen and (max-width: 682px) {
//     margin: auto 0 auto 60px;
//   }
//   @media only screen and (max-width: 515px) {
//     margin: auto;
//   }
// `;

// export const Text = styled.p`
//   color: ${({ theme }) => theme.colors.white};
//   font-family: ${({ theme }) => theme.fonts.roboto};
//   font-style: normal;
//   font-weight: normal;
//   width: 584px;
//   margin-left: 60px;
//   margin-bottom: 40px;
//   margin-top: 209px;
//   z-index: 10;
//   ${lineHeight};
//   ${space};
//   ${fontSize};
//   @media only screen and (max-width: 1024px) {
//     margin-bottom: 30px;
//     margin-top: 119px;
//   }
//   @media only screen and (max-width: 682px) {
//     width: 400px;
//     margin: auto 0 auto 60px;
//   }
//   @media only screen and (max-width: 510px) {
//     margin: auto;
//     max-width: 245px;
//     text-align: justify;
//   }
// `;

// export const Button = styled.button`
//   position: absolute;
//   z-index: 10;
//   width: 235px;
//   height: 60px;
//   right: 60px;
//   bottom: 40px;
//   background: ${({ theme }) => theme.colors.white};
//   border: none;
//   box-sizing: border-box;
//   border-radius: 10px;
//   font-family: ${({ theme }) => theme.fonts.condensed};
//   font-style: normal;
//   font-weight: bold;
//   text-align: center;
//   letter-spacing: -0.01em;
//   color: ${({ theme }) => theme.colors.purple};
//   text-transform: uppercase;
//   background: #ffffff;
//   ${lineHeight};
//   ${space};
//   ${fontSize};
//   &:hover {
//     cursor: pointer;
//     background: ${({ theme }) => theme.colors.purple};
//     color: ${({ theme }) => theme.colors.white};
//   }
//   @media screen and (max-width: 1024px) {
//     width: 235px;
//     height: 60px;
//     position: static;
//     margin-left: 60px;
//     margin-top: 0;
//     margin-bottom: 30px;
//   }
//   @media only screen and (max-width: 515px) {
//     margin: auto;
//   }
// `;
