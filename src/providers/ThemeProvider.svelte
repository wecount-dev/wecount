<script lang="ts">
  import {onMount, setContext} from 'svelte';
  import {writable} from 'svelte/store';

  import {ThemeType, Theme, ThemeStore, theme} from './theme';

  export let initialTheme: ThemeType = 'light';

  const store = writable<ThemeStore>({
    themeType: initialTheme,
    theme: theme[initialTheme],
  });

  const setCssVars = (current: Theme) => {
    Object.entries(current).forEach(([type, color]) => {
      const varString = `--theme-${type}`;

      document.documentElement.style.setProperty(varString, color);
    });
  };

  const toggle = () => {
    store.update(({themeType}) => {
      const newThemeType = themeType === 'light' ? 'dark' : 'light';

      setCssVars(theme[newThemeType]);

      return {
        themeType: newThemeType,
        theme: theme[newThemeType],
      };
    });
  };

  setContext('theme', {
    theme: $store.theme,
    themeType: $store.themeType,
    toggle,
  });

  onMount(() => {
    setCssVars($store.theme);
  });
</script>

<slot />
