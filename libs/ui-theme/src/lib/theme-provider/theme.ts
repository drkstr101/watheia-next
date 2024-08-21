import { useCallback, useState } from 'react';

export interface Theme {
  count: number;
  increment: () => void;
}

export function useTheme(): Theme {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}

export default useTheme;
