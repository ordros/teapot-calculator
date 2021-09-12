const initialState = {
  tableData: {
    columns: [],
    data: [],
  }
};

const teaTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT': {
      return {
        ...state,
        tableData: {
          ...action.payload,
        },
      };
    }
    case 'UPDATE_DATA': {
      const { data } = action.payload;
      const newTableData = state.tableData.data.filter(({ id }) => id !== data.id);
      return {
        ...state,
        tableData: {
          columns: state.tableData.columns,
          data: [
            ...newTableData,
            data,
          ],
        },
      };
    }
    case 'ADD_DATA': {
      const { data } = action.payload;
      let newDataId = Math.max(...state.tableData.data.map(({ id }) => id)) + 1;
      if (!isFinite(newDataId)) {
        newDataId = 0;
      }
      return {
        ...state,
        tableData: {
          ...state.tableData,
          data: [
            ...state.tableData.data,
            {
              ...data,
              id: newDataId,
            },
          ],
        }
      }
    };
    case 'DELETE_DATA': {
      const { rowId } = action.payload;
      const newTableData = state.tableData.data.filter(({ id }) => id !== rowId);
      return {
        ...state,
        tableData: {
          columns: state.tableData.columns,
          data: [
            ...newTableData,
          ],
        },
      };
    }
    case 'UPDATE_LAST_WATER_AMOUNT': {
      const { waterAmount, teaLeafId } = action.payload;
      const targetTableData = state.tableData.data.find(({ id }) => id == teaLeafId);
      const newTableData = state.tableData.data.filter(({ id }) => id != teaLeafId);
      return {
        ...state,
        tableData: {
          columns: state.tableData.columns,
          data: [
            ...newTableData,
            {
              ...targetTableData,
              lastWaterAmount: waterAmount,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
};

export default teaTableReducer;