// @ts-ignore
import Button from '../Button.svelte';
import {render} from '@testing-library/svelte';

it('should render without error', () => {
  const testngLib = render(Button);

  expect(testngLib.container).toMatchSnapshot();
});
