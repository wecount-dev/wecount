<style lang="postcss">
  .sub-heading {
    font-weight: bold;
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .usage-details-table {
    max-height: 242px;
    overflow: auto;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  .colmun-name {
    background-color: var(--shading);
    font-size: 0.875rem;
    height: 29px;
    box-sizing: border-box;
  }
  .colmun-name {
    color: var(--gray70);
  }
  th:first-child,
  td:first-child {
    padding-left: 24px;
    text-align: left;
  }
  th:last-child,
  td:last-child {
    padding-right: 24px;
    text-align: right;
    font-weight: bold;
  }
  td:not(:first-child):not(:last-child) {
    text-align: center;
  }
  td {
    height: 40px;
    font-size: 1rem;
    color: var(--text);

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .spending {
    color: var(--red50);
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import type {DepositType} from '../../../types';
  import {showAmount} from '../../../utils/functions';
  import Card from '../../uis/Card.svelte';
  import TextLink from './TextLink.svelte';

  export let style: string | undefined = undefined;
  export let deposits: DepositType[];
</script>

<div class="usage-detail-card" style={style}>
  <Card cardStyle={'padding: 28px; height: 341px; width: 614px'}>
    <div class="header">
      <span class="sub-heading">{$_('Dashboard.usage_details')}</span>
      <TextLink name={$_('Dashboard.more')} href={'/community/dashboard'} />
    </div>
    <div class="usage-details-table">
      <table>
        <colgroup>
          <col style="width: 40%" />
          <col style="width: 15%" />
          <col style="width: 20%" />
          <col style="width: 25%;" />
        </colgroup>
        <tr class="colmun-name">
          <th>{$_('Dashboard.spending')}</th>
          <th>{$_('Dashboard.categories')}</th>
          <th>{$_('Dashboard.date')}</th>
          <th>{$_('Dashboard.amount')}</th>
        </tr>
        {#each deposits as deposit}
          <tr>
            <td>{deposit.title}</td>
            <td>{deposit.description}</td>
            <td>{deposit.createdAt}</td>
            <td class:spending={deposit.price < 0}>
              {showAmount(deposit.price, deposit.currency)}
            </td>
          </tr>
        {/each}
      </table>
    </div>
  </Card>
</div>
