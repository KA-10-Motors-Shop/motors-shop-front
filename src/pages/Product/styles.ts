import styled from "styled-components";

export const Container = styled.main`
  section.main-product {
    background-color: var(--grey7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section.main-product-presentation {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section.main-coverPage {
    background-color: var(--brand2);
    padding-top: 8.3125rem;
    width: 100%;
    height: 27.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.main-coverPage__img {
      width: 90vw;
      height: 22.2rem;
      background-color: var(--grey10);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.25rem;

      img {
        height: 15.81em;
        width: 80vw;
        background-color: var(--grey10);
        object-fit: scale-down;
      }
    }
  }

  section.main-data_product {
    background-color: var(--grey10);
    border-radius: 4px;
    width: 90vw;
    height: 20.44rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    margin-top: -20px;
    padding-left: 1.75em;
    margin-bottom: 1.5rem;

    h6.main-data-product__title {
      margin-top: 2.75em;
      margin-bottom: 4em;
    }

    div {
      display: flex;
      flex-flow: column;
      gap: 35px;
      div.div-data_product {
        display: flex;
        width: 7.1em;
        flex-direction: row;
        gap: 0;

        p {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 2em;
          background-color: var(--brand4);
          border-radius: 4px;
          color: var(--brand1);
          padding: 0.25rem 0.5rem;
          margin-right: 0.75rem;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.5rem;
          white-space: nowrap;
        }
      }

      h6 {
        color: var(--grey1);
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.25rem;
      }
    }

    button {
      width: 6.25rem;
      height: 2.4rem;
      padding: 1.25rem 0.75rem;
      font-size: 0.875rem;
      margin: 20px 0;
    }
  }

  section.main-product__description {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 18%;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--grey10);
    border-radius: 4px;
    margin-bottom: 0.94rem;

    h6 {
      margin-top: 2.25em;
      margin-bottom: 2em;
      font-weight: 600;
      font-size: 1.25em;
      line-height: 1.56em;
      color: var(--grey1);
      padding-left: 1.75em;
      padding-right: 1.75em;
    }

    p {
      font-size: 1em;
      line-height: 1.75em;
      color: var(--grey2);
      margin-bottom: 2.25em;
      padding-left: 1.75em;
      padding-right: 1.75em;
    }
  }

  aside.aside {
    width: 90vw;
    margin-bottom: 1.125rem;

    section.aside-pictures-product {
      background-color: var(--grey10);
      padding-top: 2.25rem;
      border-radius: 4px;
      margin-bottom: 3em;

      h6 {
        padding-left: 2.75rem;
        font-weight: 600;
        font-size: 1.25em;
        line-height: 1.56rem;
        color: var(--grey1);
        margin-bottom: 2rem;
      }

      ul {
        padding-left: 2.75rem;
        width: 90%;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 30%;
          margin-right: 0.3em;
          background-color: var(--grey7);
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          flex-shrink: 1;
          margin-bottom: 3em;

          img {
            max-width: 100%;
          }
        }

        li:nth-child(3) {
          margin-right: 0;
        }

        li:last-child {
          margin-right: 0;
        }
      }
    }

    section.aside-user {
      background-color: var(--grey10);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 37px 40px;

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        p {
          line-height: 1;
          margin: 10px 0 20px 0;
          text-align: center;
        }

        /* p.aside-user__initials {
          background-color: var(--brand1);
          width: 4.82rem;
          height: 4.82rem;
          border-radius: 50%;
          font-weight: 500;
          font-size: 1.7rem;
          line-height: 2.44rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--whiteFixed);
          margin-bottom: 1.75rem;
        } */

        /* h6 {
          color: var(--grey1);
          font-weight: 600;
          font-size: 1.25rem;
          line-height: 1.6rem;
          margin-bottom: 1.75rem;
        }

        h6 + p {
          color: var(--grey2);
          font-size: 1rem;
          line-height: 1.75rem;
          text-align: center;
          padding-left: 1.75rem;
          padding-right: 1.75rem;
          margin-bottom: 1.75rem;
        } */
      }

      button {
        width: 12.875rem;
        height: 3rem;
      }
    }
  }

  section.main-comments {
    background-color: var(--grey7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section.section-comments {
      width: 90vw;
      background-color: var(--grey10);
      border-radius: 4px;
      margin-bottom: 2.63rem;

      h6 {
        margin-top: 2.25rem;
        font-weight: 600;
        font-size: 1.25rem;
        font-weight: 1.6rem;
        color: var(--grey1);
        margin-bottom: 1.5rem;
        margin-left: 1.75rem;
      }

      ul {
        margin-left: 1.75rem;
      }

      ul li {
        div {
          display: flex;
          flex-direction: row;
          margin-bottom: 0.75rem;
          justify-content: flex-start;
          align-items: center;

          p.section-comments__initials {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: var(--brand1);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: 0.5rem;
          }

          p + p {
            color: var(--grey1);
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.5rem;
          }

          span {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--grey4);
            margin-right: 0.8125rem;
          }

          span + p {
            font-size: 0.75rem;
            line-height: 1.5rem;
            color: var(--grey3);
          }
        }

        p.section-comments__comment {
          font-size: 0.875rem;
          line-height: 1.5rem;
          color: var(--grey2);
          margin-bottom: 2.75rem;
        }
      }
    }
  }

  section.main-newComment {
    background-color: var(--grey7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section.section-newComment {
      width: 90vw;
      background-color: var(--grey10);
      border-radius: 4px;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1.5rem;
        margin-top: 2.25rem;
        margin-left: 1.625rem;

        p.section-newComment__initials {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: var(--brand1);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-right: 0.5rem;
        }

        p + p {
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.5rem;
          color: var(--grey1);
        }
      }

      form {
        textarea {
          margin-left: 1.625rem;
          width: 80%;
          height: 8rem;
          border-radius: 4px;
          border: 1.5px solid var(--grey7);
          margin-bottom: 1.5rem;
          resize: none;

          ::placeholder {
            padding-top: 1rem;
            color: var(--grey3);
            line-height: 1.625rem;
            font-size: 1rem;
            padding-left: 1rem;
            padding-right: 0.2rem;
          }

          :hover {
            background-color: var(--grey8);
            border: 1.5px solid var(--grey8);
          }

          :focus {
            background-color: var(--grey9);
            border: 1.5px solid var(--brand2);
          }
        }

        button {
          margin-left: 1.625rem;
          width: 6.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
      }

      section.section-newComment__recommendation {
        ul {
          display: flex;
          flex-wrap: wrap;
          margin-left: 1.625rem;
          margin-bottom: 2.25rem;
        }

        ul li {
          background-color: var(--grey7);
          height: 1.5rem;
          border-radius: 1.5rem;
          display: flex;
          flex-direction: row;
          width: fit-content;
          padding: 0px 12px;
          margin-right: 0.5rem;
          margin-bottom: 1.5rem;

          p {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--grey3);
            font-size: 0.75rem;
            font-weight: 500;
            line-height: 1.5rem;
          }
        }

        ul li:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (min-width: 750px) {
    section.main-product {
      align-items: flex-start;
      flex-direction: row;
      justify-content: center;
      /*align-items: flex-start;*/
      background: rgb(81, 38, 234);
      background: linear-gradient(
        180deg,
        rgba(81, 38, 234, 1) 67%,
        rgba(233, 236, 239, 1) 67%
      );
    }

    section.main-product-presentation {
      width: 45%;
      margin-right: 3.5rem;
    }

    section.main-coverPage {
      align-items: flex-start;

      div.main-coverPage__img {
        width: 45vw;

        img {
          width: 44vw;
        }
      }
    }

    section.main-data_product {
      width: 45vw;
      margin-left: 0.3em;
      margin-bottom: 1.5rem;

      h6.main-data-product__title {
        white-space: nowrap;
        line-height: 1;
        margin: 30px 0;
      }

      div {
        display: flex;
        width: 95%;
        align-items: flex-start;
        flex-flow: row;
        justify-content: space-between;
      }
    }

    section.main-product__description {
      width: 45vw;
    }

    aside.aside {
      width: 25%;
      margin-top: 5.3rem;

      section.aside-pictures-product {
        margin-bottom: 2em;
        margin-top: 3rem;
      }
    }

    section.main-comments {
      align-items: flex-start;
      padding-left: 10.6rem;

      section.section-comments {
        width: 45vw;
      }
    }

    section.main-newComment {
      margin-bottom: 4.56rem;

      section.section-newComment {
        width: 45vw;
      }
    }
  }
`;
