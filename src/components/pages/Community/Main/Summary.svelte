<style lang="postcss">
  .container {
    grid-area: summary;
    background-color: var(--card);
    min-height: 380px;
    padding: 0 20px;
    border-radius: 16px;

    display: grid;
    align-items: stretch;
    grid-auto-flow: row;
    grid-template-columns: 330px 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      'title  title'
      'card   usage'
      'card   usage'
      'card   usage'
      'amount sponsor';

    @media (--mobile) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
    }

    div {
      display: flex;
      align-items: center;
      color: var(--text);
    }

    .title {
      grid-area: title;

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .manage {
        color: var(--text-light);
      }

      @media (--mobile) {
        padding-bottom: 8px;
      }
    }

    .card {
      grid-area: card;

      @media (--mobile) {
      }
    }

    .usage {
      grid-area: usage;
    }

    .amount {
      grid-area: amount;
    }

    .sponsor {
      grid-area: sponsor;
    }
  }
</style>

<script>
  import {GREEN} from '../../../../theme';
  import CommunityCard from '../../../uis/CommunityCard.svelte';
</script>

<div class="container">
  <div class="title">
    <div class="body1">dooboolab 커뮤니티</div>
    <div class="manage body3">가계부 관리</div>
  </div>
  <CommunityCard
    style="grid-area: card;"
    color={GREEN}
    name="dooboolab"
    currency="KRW"
    description="dooboolab card"
    balance={100000}
  />
  <div class="usage">Usage</div>
  <div class="amount">Amount</div>
  <div class="sponsor">Sponsor</div>
</div>
