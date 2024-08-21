import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useTheme from './theme';

describe('useTheme', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
