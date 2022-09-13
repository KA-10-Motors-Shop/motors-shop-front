import styled from "styled-components";

export const DivContainer = styled.div`
  width: 95%;
  /* padding-left: 20px; */
  margin-top: 50px;
`;

export const AuctionBox = styled.section`
  /* height: 37.52rem; */
  width: 100%;

  h5 {
    margin-top: 1rem;
    margin-bottom: 3rem;
    margin-left: 0.75rem;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    height: 500px;
    width: 100%;

    li:first-child {
      margin-left: 0.75rem;
    }
  }

  div.swiper-slide {
    height: 30rem;
    width: 45.94rem !important;
  }
`;
