<script>
  import App from './App.svelte';
  import {ThemeProvider} from './utils/theme';
</script>

<ThemeProvider initialTheme="light">
  <App />
</ThemeProvider>
