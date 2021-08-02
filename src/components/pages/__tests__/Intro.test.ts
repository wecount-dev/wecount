// @ts-ignore
import Intro from '../Intro.svelte';
import {render} from '@testing-library/svelte';

it('should render without error', () => {
  const testngLib = render(Intro);

  expect(testngLib.container).toMatchSnapshot();
});
