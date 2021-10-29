<style lang="postcss">
  .container {
    display: grid;

    background-color: var(--background);
  }
</style>

<script lang="ts">
  import Drawer from './Drawer/index.svelte';
</script>

<div class="container">
  <nav>
    <Drawer
      communites={[
        {
          id: '123',
          name: 'comm',
          isPublic: true,
          currency: 'USD',
          description: 'community description',
          color: 'red',
          createdAt: new Date().toISOString(),
        },
      ]}
      onSelectMenu={() => {}}
    />
  </nav>
</div>
