import { Button as AriaButton, ButtonProps } from 'react-aria-components';

export type { ButtonProps };

export function Button(props: ButtonProps) {
  return <AriaButton {...props} />;
}

export default Button;
