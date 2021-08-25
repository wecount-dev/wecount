<style lang="postcss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .list-container {
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 200px;
    @media (max-width: 1200px) {
      width: 100%;
      margin-right: 0px;
    }
  }
  :global(.create-feed-button) {
    margin-top: 24px;
    margin-bottom: 10px;
    font-size: 14px;
    @media (max-width: 1200px) {
      margin-right: 24px;
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../../uis/Button.svelte';
  import FeedCreatePopup from '../../uis/FeedCreatePopup.svelte';

  let feedCreatePopupVisible = false;

  const communityInfo = {
    iconUri: 'https://picsum.photos/50/50?random=1',
    name: 'dooboolab',
    currency: 'USD',
  };
</script>

<main>
  <div class="container">
    <div class="list-container">
      <Button
        on:click={() => (feedCreatePopupVisible = true)}
        primary
        class="create-feed-button">{$_('Feed.create_feed')}</Button
      >
    </div>
  </div>
  <FeedCreatePopup
    communityInfo={communityInfo}
    bind:visible={feedCreatePopupVisible}
  />
</main>
