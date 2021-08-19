<style lang="postcss">
  .container {
    display: flex;
    justify-content: center;
  }
  .wrap {
    width: 620px;
  }
  .title {
    margin-top: 40px;
    margin-bottom: 22px;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
</script>

<div class="container">
  <div class="wrap">
    <h3 class="title">
      {$_('app_name')}<br />{$_('Community.create_community')}
    </h3>
  </div>
</div>
