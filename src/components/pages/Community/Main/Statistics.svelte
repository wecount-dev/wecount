<style lang="postcss">
  .container {
    grid-area: statistics;
    background-color: var(--card);
    padding: 0 20px 12px 20px;
    border-radius: 16px;

    display: grid;
    align-items: stretch;
    grid-auto-flow: row;
    row-gap: 28px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 72px 216px 1fr;
    grid-template-areas:
      'title  title'
      'graph  graph'
      'statistics statistics';

    @media (--mobile) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 12px 20px 28px 20px;
    }

    .title {
      grid-area: title;
      padding-top: 8px;
      align-items: center;

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .more {
        cursor: pointer;
        color: var(--text-light);
        align-items: center;

        display: flex;

        &:hover {
          color: var(--text);
        }
      }

      @media (--mobile) {
        padding-bottom: 8px;
      }
    }

    .graph {
      grid-area: graph;

      display: flex;
      flex-direction: row;
    }

    .statistics {
      grid-area: statistics;

      display: flex;
      flex-direction: column;

      .title {
        flex-direction: row;
        align-items: center;
        font-weight: bold;

        .body1 {
          color: var(--red);
        }
      }

      .content {
        flex: 1;
        border-radius: 16px;
        background-color: var(--paper);
        margin-bottom: 28px;
        margin-top: 8px;
      }
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import {decoPrice} from '../../../../utils/functions';

  const clickMore = () => {
    console.log('click more');
  };
</script>

<div class="container">
  <div class="title">
    <div class="body1">{$_('statistics')}</div>
    <div class="more body3" on:click={clickMore}>
      {$_('more')}
      <i class="material-icons md-18">chevron_right</i>
    </div>
  </div>
  <div class="graph" />
  <div class="statistics">
    <div class="title">
      <div>10월 사용 금액</div>
      <div class="body1">
        {decoPrice({
          price: 408400,
          currency: 'KRW',
        })}
      </div>
    </div>
    <div class="content" />
  </div>
</div>
