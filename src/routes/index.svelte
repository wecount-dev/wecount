<style lang="postcss">
  .container {
    justify-self: center;
    width: 30%;
    color: var(--text);
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
</script>

<div class="container">
  <p>{$_('app_name')}</p>

  <ul>
    <li>
      Go to <a href="/auth/sign-in">/sign-in</a>
    </li>
    <li>
      Go to <a href="/auth/temp">/temp</a>
    </li>
  </ul>
</div>
