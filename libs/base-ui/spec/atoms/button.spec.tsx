import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Button from '../../src/lib/atoms/button';

describe('Button', () => {
  it('should render successfully', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
