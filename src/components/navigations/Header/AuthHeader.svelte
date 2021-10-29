<style lang="postcss">
  :global(.button) {
    min-width: 80px;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import {push} from 'svelte-spa-router';
  import Button from '../../uis/Button.svelte';
</script>

<div class="container">
  <Button
    style="margin-right: 8px;"
    class="button"
    on:click={async () => {
      await push('/sign_in');
    }}
  >
    <div class="body3">{$_('login')}</div>
  </Button>
  <Button
    primary
    class="button"
    on:click={async () => {
      await push('/sign_up');
    }}
  >
    <div class="body3">{$_('SignUp.title')}</div>
  </Button>
</div>
