<script>
  import App from './App.svelte';
  import {ThemeProvider} from 'svelte-theme';
  import {light, dark} from './theme';
</script>

<ThemeProvider
  customTheme={{
    light,
    dark,
  }}
>
  <App />
</ThemeProvider>
