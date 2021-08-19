<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script lang="ts">
  import TripleCircleProgressBar from '../uis/TripleCircleProgressBar.svelte';
</script>

<main>
  <h2>Circle Progress Bar</h2>
  <TripleCircleProgressBar
    outerCompleted={80}
    middleCompleted={70}
    innerCompleted={60}
  />
</main>
