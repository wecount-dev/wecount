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

  import FeedCreatePopup from '../uis/FeedCreatePopup.svelte';

  let visible = true;
</script>

<main>
  <Button on:click={() => (visible = true)}>Open Feed Create Popup</Button>
  <FeedCreatePopup
    bind:visible
    on:submit={(event) => console.log(event.detail)}
    communityInfo={{
      iconUri: 'https://avatars.githubusercontent.com/u/45788556?s=200&v=4',
      name: 'dooboolab',
      currency: 'USD',
    }}
  />
</main>
