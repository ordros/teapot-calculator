import { useDispatch } from "react-redux";
import styled from "styled-components";
import DeleteButton from "../DeleteButton";

const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`;

const TableHeader = styled.th`
  text-align: ${({align}) => (align || 'start')};
  padding: 0 16px;
`;

const TableHeaderRow = styled.tr`
  background: #a0a0a0;
`;

const StyledTd = styled.td`
  border-bottom 1px solid #a0a0a0;
  padding: 0 8px;
`;

const DeleteTd = styled.td`
  border-bottom 1px solid #a0a0a0;
  padding: 0 8px 0 16px;
`;

const StyledInput = styled.input`
  border: none;
  text-align: ${({align}) => (align || 'start')};
  width: 100%;
`;

const EditableTable = ({ data, onDelete }) => {
  const dispatch = useDispatch();

  const onChange = ({
    rowId,
    columnId,
    value,
  }) => {
    const targetRowData = data.data.find(({id}) => id === rowId);
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        data: {
          ...targetRowData,
          id: rowId,
          [columnId]: value,
        }
      }
    });
  }

  if (!data || !data.columns) {
    return null;
  }
  return (
    <StyledTable>
      <thead>
        <TableHeaderRow>
          {data.columns.map((column) => (
            <TableHeader key={column.id} align={column.align}>{column.label}</TableHeader>
          ))}
          <th></th>
        </TableHeaderRow>
      </thead>
      <tbody>
        {data.data.sort((a, b) => a.id - b.id).map((row) => (
          <tr key={row.id}>
            {data.columns.map((column) => (
              <StyledTd
                key={column.id}
                align={column.align}
              >
                <StyledInput
                  value={row[column.id]}
                  align={column.align}
                  type={column.type || 'text'}
                  min={1}
                  onChange={(e) => onChange({
                    rowId: row.id,
                    columnId: column.id,
                    value: e.target.value,
                  })}
                />
              </StyledTd>
            ))}
            <DeleteTd>
              <DeleteButton onClick={() => onDelete(row.id)} />
            </DeleteTd>
          </tr> 
        ))}
      </tbody>
    </StyledTable>
  );
};

export default EditableTable;