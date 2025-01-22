import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

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

const unsuscribe = store.subscribe(()=>{
    console.log(store.getState());
})

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    // Subscribe to store changes
    const unsubscribe = store.subscribe(() => {
      console.log('State changed:', store.getState());
    });

    // Cleanup: Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

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

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );

};

export default App;