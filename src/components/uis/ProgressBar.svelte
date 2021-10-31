<style lang="postcss">
  .container {
    width: 100%;
    height: 10px;
    background-color: var(--disabled);
    border-radius: 8px;
  }

  .bar {
    background-color: var(--primary);
    height: 10px;
    border-radius: 8px;
    width: var(--percentage);
    transition: width 1s ease;
  }
</style>

<script lang="ts">
  export let percentage = 0;
</script>

<div class="container">
  <div class="bar" style="--percentage: {percentage}%;" />
</div>
