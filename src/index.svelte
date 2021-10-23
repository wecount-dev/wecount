<script>
  import App from './App.svelte';
  import ThemeProvider from './providers/ThemeProvider.svelte';
</script>

<ThemeProvider initialTheme="light">
  <App />
</ThemeProvider>
