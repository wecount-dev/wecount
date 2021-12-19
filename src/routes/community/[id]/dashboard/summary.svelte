<style lang="postcss">
  .container {
    grid-area: summary;
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
      'title title'
      'card usage'
      'card usage'
      'card usage'
      'amount sponsor';

    @media (--mobile) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 12px 20px 28px 20px;
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

    .usage {
      grid-area: usage;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      @media (--mobile) {
        margin-top: 8px;
      }

      .head {
        align-self: stretch;
        border-width: 3px;
        border-color: white;
        color: var(--placeholder);
      }

      hr {
        border: 1px solid var(--placeholder);
        width: 100%;
      }

      .price {
        margin: 6px 0;
        align-self: flex-end;
        color: var(--price);
      }
    }

    .amount {
      grid-area: amount;
      padding-top: 16px;

      display: flex;
      justify-content: center;
      flex-direction: column;

      .placeholder {
        color: var(--placeholder);
      }

      .current {
        align-self: stretch;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .sponsor {
      grid-area: sponsor;

      .body3 {
        color: white;
        font-weight: bold;
      }
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';

  import {GREEN, RED} from '../../../../theme';
  import {decoPrice} from '../../../../utils/functions';
  import Button from '../../../../layouts/button.svelte';
  import CommunityCard from '../../../../layouts/community-card.svelte';
  import ProgressBar from '../../../../layouts/progress-bar.svelte';

  const amounts = [400000, -300000, 400000, 1400000, 1400000];

  let percentage = 20;

  const clickManage = () => {
    console.log('click manage');
  };

  const clickSponsoring = () => {
    if (percentage >= 100) {
      return;
    }

    percentage += 10;
  };
</script>

<div class="container">
  <div class="title">
    <div class="body1">dooboolab 커뮤니티</div>
    <div class="manage body3" on:click={clickManage}>
      {$_('manage')}
      <i class="material-icons md-18">chevron_right</i>
    </div>
  </div>
  <CommunityCard
    --color={GREEN}
    style="grid-area: card;"
    name="dooboolab"
    currency="KRW"
    description="dooboolab card"
    balance={100000}
  />
  <div class="usage">
    <div class="head body3">{$_('recent_history')}</div>
    <hr />
    {#each amounts as amount}
      <div class="body3 price" style={`--price: ${amount < 0 ? RED : ''};`}>
        {decoPrice({
          price: amount,
          currency: 'KRW',
        })}
      </div>
    {/each}
  </div>
  <div class="amount">
    <ProgressBar percentage={percentage} />
    <div class="current">
      <div class="body3 placeholder">{$_('remaining_amount')}</div>
      <div class="body3">
        <pre class="placeholder">{decoPrice({
            price: 100000,
            currency: 'KRW',
            currencyDisplay: null,
            style: null,
          })}</pre>
        &nbsp;/&nbsp;
        {decoPrice({
          price: 400000,
          currency: 'KRW',
          currencyDisplay: null,
          style: null,
        })}
      </div>
    </div>
  </div>
  <div class="sponsor">
    <Button on:click={clickSponsoring} primary type="submit" style="flex: 1;">
      <div class="body3">{$_('sponsor')}</div>
    </Button>
  </div>
</div>
