<style lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @custom-media --mobile (max-width: 640px);
  main {
    background-color: var(--background);
    color: var(--text);
    text-align: center;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import './i18n';
  import {Router} from '@roxi/routify';
  import routes from '../.routify/routes.default.js';
  import type {ThemeStore} from 'svelte-theme';
  import {getContext} from 'svelte';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  const toggleTheme = () => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.') {
        changeThemeType();
      }
    });
  };

  toggleTheme();
</script>

<main>
  <Router routes={routes} />
</main>
