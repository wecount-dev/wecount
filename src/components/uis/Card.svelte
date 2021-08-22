<style lang="postcss">
  .card {
    background-color: var(--card);
    border: 1px solid var(--gray20);
    box-sizing: border-box;
    box-shadow: 2px 12px 12px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
    padding: 20px;
    width: 100%;
  }
</style>

<script lang="ts">
  export let cardStyle: string | undefined = undefined;
</script>

<div class="card" style={cardStyle}>
  <slot />
</div>
