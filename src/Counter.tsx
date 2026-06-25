import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector((state: any) => state.counter.value || 0);
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        <button 
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ fontSize: '24px', padding: '10px 20px' }}
        >
          -
        </button>
        <span style={{ fontSize: '32px', fontFamily: 'monospace' }}>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ fontSize: '24px', padding: '10px 20px' }}
        >
          +
        </button>
      </div>
    </div>
  );
}
     
