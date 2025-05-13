import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { errorSliceActions } from "../store/store";

const ToastBox = styled.div`
  width: 17rem;
  height: auto;
  background: linear-gradient(90deg, rgb(109 235 130), rgb(63 255 0));
  color: black;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 19px #023302;
  z-index: 100000;
  margin: 0 auto;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;


  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: black;
    font-size: 1rem;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const ToastList = styled.ul`
  position: absolute;
  left: 30rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ToastItem = styled.li`
  margin-top: 1rem;
`;

export default function ToastMsg() {
  const errorState = useSelector((state) => state.errorState.error || []);
  const dispatch = useDispatch();

  const closeToastMessage = (errorData) => {
    dispatch(errorSliceActions.removeError({ id: errorData.id }));
  };

  return (
    <ToastList>
      {errorState.map((errorData) => {
        let isVisible = errorData.visible;
        return (
          <ToastItem key={errorData.id}>
            <ToastBox $isVisible={isVisible} role="alert" aria-live="assertive">
              <span>{errorData.message}</span>
              <button onClick={() => closeToastMessage(errorData)}>X</button>
            </ToastBox>
          </ToastItem>
        );
      })}
    </ToastList>
  );
}