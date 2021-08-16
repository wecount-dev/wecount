<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script lang="ts">
  import ProgressBar from '../uis/ProgressBar.svelte';
</script>

<main>
  <ProgressBar completed={60} />
</main>
