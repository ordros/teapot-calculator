import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TeapotIcon = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 5px 5px 20px 20px;
  border: 4px solid black;
  display: flex;
  align-items: end;
`;

const TeapotWater = styled.div`
  width: 100%;
  background: #70f1ff;
  border-radius: 1px 1px 15px 15px;
  height: ${({amount, max}) => (amount/max)*100}%;
  z-index: -1;
`;

const ScaleWrapper = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

const ScaleText = styled.div`
  position: relative;
  left: -9px;
  font-weight: bold;
`;

const Teapot = ({
  max,
  amount,
}) => {
  return (
    <Wrapper>
      <TeapotIcon>
        <TeapotWater max={parseInt(max)} amount={parseInt(amount)}/>
      </TeapotIcon>
      <ScaleWrapper>
          <ScaleText> {max||100}</ScaleText>
          <ScaleText>- {(max||100)/4*3}</ScaleText>
          <ScaleText>- {(max||100)/2}</ScaleText>
          <ScaleText>- {(max||100)/4*1}</ScaleText>
          <ScaleText> 0</ScaleText>
        </ScaleWrapper>
    </Wrapper>
  );
};

export default Teapot;