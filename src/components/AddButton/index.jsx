import styled from "styled-components";

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  border: 1px solid #a0a0a0;
  :hover {
    background: #ff3a00;
    border: 1px solid #ff3a00;
    div {
      color: white;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mark = styled.div`
  font-size: 24px;
`;

const AddButton = ({
  ...remainProps
}) => {
  return (
    <Circle {...remainProps}>
      <Mark>＋</Mark>
    </Circle>
  )
};

export default AddButton;