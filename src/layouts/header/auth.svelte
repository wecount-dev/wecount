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
  import Button from '../button.svelte';
  import {goto, url} from '@roxi/routify';
</script>

<div class="container">
  <Button
    style="margin-right: 8px;"
    class="button"
    on:click={() => {
      $goto($url('/auth/sign-in'));
    }}
  >
    <div class="body3">{$_('login')}</div>
  </Button>
  <Button
    primary
    class="button"
    on:click={() => {
      $goto($url('/auth/sign-up'));
    }}
  >
    <div class="body3">{$_('auth.sign-up.title')}</div>
  </Button>
</div>
