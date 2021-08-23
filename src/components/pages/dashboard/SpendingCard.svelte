<style lang="postcss">
  .sub-heading {
    font-weight: bold;
    margin-bottom: 30px;
  }
  .circle-progress {
    display: flex;
    justify-content: center;
    margin-bottom: 55px;
  }
  .month-amount {
    display: flex;
    justify-content: space-between;
  }
  h6,
  p {
    margin: 0;
  }
  h6 {
    color: var(--red50);
  }
  p,
  .price {
    font-weight: bold;
  }
  .amount-layout {
    border-top: 1px solid var(--gray40);
  }
  .spending-layout {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background-color: var(--gray10);
  }
  .spending-part {
    display: flex;
    align-items: center;
  }
  .dot {
    height: 6px;
    width: 6px;
    background-color: var(--dot-color);
    border-radius: 50%;
    display: inline-block;
    margin-right: 9px;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Card from '../../uis/Card.svelte';
  import TripleCircleProgressBar from '../../uis/TripleCircleProgressBar.svelte';

  export let style: string | undefined = undefined;
</script>

<div class="usage-detail-card" style={style}>
  <Card cardStyle={'padding: 28px; height: 546px; width: 366px'}>
    <div class="sub-heading">{$_('Dashboard.expenditure_statistics')}</div>
    <div class="circle-progress">
      <TripleCircleProgressBar
        outerCompleted={78}
        middleCompleted={70}
        innerCompleted={60}
      />
    </div>
    <div>
      <div class="month-amount">
        <p>
          💳 {`10
        ${String($_('Dashboard.month'))} 
        ${String($_('Dashboard.amount'))}`}
        </p>
        <h6>408,400 원</h6>
      </div>
      <div class="amount-layout">
        <div class="spending-layout">
          <div class="spending-part">
            <span class="dot" style="--dot-color: var(--primary)" />
            <span class="p2">{$_('Dashboard.salary')}</span>
          </div>
          <span class="p2 price">223,000 원</span>
        </div>
        <div class="spending-layout">
          <div class="spending-part">
            <span class="dot" style="--dot-color: var(--blue50)" />
            <span class="p2">{$_('Dashboard.parcel_service')}</span>
          </div>
          <span class="p2 price">160,400 원</span>
        </div>
        <div class="spending-layout">
          <div class="spending-part">
            <span class="dot" style="--dot-color: var(--gray40)" />
            <span class="p2">{$_('Dashboard.delivery')}</span>
          </div>
          <span class="p2 price">25,000 원</span>
        </div>
      </div>
    </div>
  </Card>
</div>
