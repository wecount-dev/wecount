import {render} from '@testing-library/svelte';

import Component from './index.svelte';

describe('/', () => {
    it('renders link to /sign-in', () => {
        const {getByRole} = render(Component);

        getByRole('link', {name: '/sign-in'});
    });

    it('renders link to /temp', () => {
        const {getByRole} = render(Component);

        getByRole('link', {name: '/temp'});
    });
});
