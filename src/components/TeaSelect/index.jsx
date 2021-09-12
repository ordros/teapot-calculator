import styled from "styled-components";

const StyledSelect = styled.select`
  border: 2px solid;
`;

const TeaSelect = ({
  teaList,
  onChange,
}) => {
  return (
    <StyledSelect onChange={onChange}>
      {teaList.filter((row) => {
        return row.leafName && row.leafAmount && row.waterAmount;
      }).map((tea) => {
        return <option key={tea.id} value={tea.id}>{tea.leafName}</option>
      })}
    </StyledSelect>
  )
};

export default TeaSelect;