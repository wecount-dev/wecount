<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script lang="ts">
  import Button from '../uis/Button.svelte';

  import CreateFeedPopup from '../uis/CreateFeedPopup.svelte';

  let visible = true;
</script>

<main>
  <Button on:click={() => (visible = true)}>Create Feed Popup</Button>
  <CreateFeedPopup
    bind:visible
    communityInfo={{
      iconUri: 'https://avatars.githubusercontent.com/u/45788556?s=200&v=4',
      name: 'dooboolab',
    }}
  />
</main>
