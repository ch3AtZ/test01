import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
        state.count -= 1
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export const { increment , decrement } = counterSlice.actions;


const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <div>Count: {count}</div>
    </div>
  );
};
''
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;