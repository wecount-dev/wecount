<style lang="postcss">
  .container {
    grid-area: history;
    background-color: var(--card);
    padding: 0 20px 12px 20px;
    border-radius: 16px;

    display: grid;
    align-items: stretch;
    grid-auto-flow: row;
    column-gap: 40px;
    grid-template-columns: 330px 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      'title  title'
      'history history';

    @media (--mobile) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 12px 20px 28px 20px;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: var(--text);
  }

  .title {
    grid-area: title;
    padding-top: 8px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .manage {
      cursor: pointer;
      color: var(--text-light);

      &:hover {
        color: var(--text);
      }
    }

    @media (--mobile) {
      padding-bottom: 8px;
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';

  let percentage = 20;

  const clickMore = () => {
    console.log('click manage');
  };
</script>

<div class="container">
  <div class="title">
    <div class="body1">{$_('usage_history')}</div>
    <div class="manage body3" on:click={clickMore}>
      {$_('more')}
      <i class="material-icons md-18">chevron_right</i>
    </div>
  </div>
</div>
