import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 20px;
  transform: rotate(-90deg);
`;

const Slider = ({
  min = 0,
  max = 100,
  step = 10,
  value,
  setValue = () => null,
}) => {
  const onChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <Wrapper>
      <input
        type="range"
        min={min}
        max={max||100}
        value={value}
        step={step}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Slider;