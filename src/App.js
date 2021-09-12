import './App.css';
import Teapot from './components/Teapot';
import Slider from './components/Slider';
import { useState } from 'react';
import { createStore } from 'redux'
import styled from 'styled-components';
import EditableTable from './components/EditableTable';
import teaTableReducer from './reducers/teaTableReducer';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TeaSelect from './components/TeaSelect';
import AddButton from './components/AddButton';
import { readFromLocalStorage, writeToLocalStorage } from './utils/localStorageUtils';

const Root = styled.div`
  margin: 8px 16px;
`;

const TeapotWrapper = styled.div`
  display: flex;
`;

const TableWrapper = styled.div`
  max-width: 580px;
`;

const StyledAddButton = styled(AddButton)`
  margin: 0 8px 4px auto;
`;

const AmountWrapper = styled.div`
  position: absolute;
  left: 240px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TeaLeafAmount = styled.div`
  font-weight: bold;
  font-size 36px;
  margin-bottom: 8px;
`;

const WaterAmount = styled.div`
  font-weight: bold;
  font-size 36px;
  border-top: 4px solid black;
`;

const App = () => {
  const store = createStore(teaTableReducer);
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

const Page = () => {
  const max = 400;
  const min = 0;
  const [waterAmount, setWaterAmount] = useState(50);
  const [teaLeafId, setTeaLeafId] = useState(null);
  const [teaLeafAmount, setTeaLeafAmount] = useState(0);

  const { tableData } = useSelector((state) => state);

  const teaList = tableData.data.sort((a, b) => a.id - b.id);

  const dispatch = useDispatch();

  const calcTeaLeafAmount = () => {
    const targetTeaLeaf = tableData.data.find(({ id }) => id == teaLeafId);
    if (!targetTeaLeaf) {
      return 0;
    }
    return (targetTeaLeaf.leafAmount / targetTeaLeaf.waterAmount) * waterAmount;
  };

  const addBlankRow = () => {
    dispatch({
      type: 'ADD_DATA',
      payload: {
        leafName: '',
        leafAmount: 0,
        waterAmount: 0,
      }
    });
  };

  const onDeleteRow = (rowId) => {
    dispatch({
      type: 'DELETE_DATA',
      payload: {rowId},
    });
  };

  useEffect(() => {
    setTeaLeafAmount(calcTeaLeafAmount());
  }, [waterAmount, teaLeafId, tableData]);

  useEffect(() => {
    if (teaList.length && !teaList.find(({id}) => id == teaLeafId)) {
      setTeaLeafId(teaList[0].id);
    } else {
      if (!teaList.length)
      setTeaLeafId(null);
    }
    if (tableData && tableData.data.length) {
      writeToLocalStorage(tableData);
    }
  }, [tableData]);

  useEffect(() => {
    if (waterAmount && !isNaN(teaLeafId)) {
      dispatch({
        type: 'UPDATE_LAST_WATER_AMOUNT',
        payload: { waterAmount, teaLeafId }
      });
    }
  }, [waterAmount]);

  useEffect(() => {
    const target = tableData.data.find(({id}) => id == teaLeafId);
    if (target && target.lastWaterAmount) {
      setWaterAmount(target.lastWaterAmount);
    }
  }, [teaLeafId]);

  useEffect(() => {
    const data = readFromLocalStorage();
    dispatch({
      type: 'INIT',
      payload: {
        columns: [
          { id: 'leafName', label: '茶葉', align: 'center' },
          { id: 'leafAmount', label: '茶葉の量 [g]', align: 'right', type: 'number' },
          { id: 'waterAmount', label: '水の量 [mL]', align: 'right', type: 'number' },
        ],
        data: data ? data.data : [],
      },
    })
  }, []);

  return (
    <Root>
      <TeaSelect teaList={teaList} onChange={(e) => setTeaLeafId(e.target.value)} />
      <TeapotWrapper>
        <Teapot max={max} amount={waterAmount} />
        <Slider min={min} max={max} value={waterAmount} setValue={(v) => setWaterAmount(v)} />
        <AmountWrapper>
          <TeaLeafAmount>{isNaN(teaLeafAmount) || !teaLeafAmount ? ' - ' : Math.round(teaLeafAmount)}g</TeaLeafAmount>
          <WaterAmount>{waterAmount}mL</WaterAmount>
        </AmountWrapper>
      </TeapotWrapper>
      <TableWrapper>
        <StyledAddButton onClick={addBlankRow}>a</StyledAddButton>
        <EditableTable data={tableData} onDelete={onDeleteRow} />
      </TableWrapper>
    </Root>
  );
}

export default App;
