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
      border: 1px solid var(--border);
      box-sizing: border-box;
      border-radius: 16px;
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      padding: 26px;
      max-height: 212px;

      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .owner {
        flex: 1;
        margin-top: 13px;
        margin-bottom: 17px;

        flex-direction: row;
        height: 32px;

        .body4 {
          margin-left: 5px;

          flex-direction: column;
          align-items: flex-start;
        }
      }

      .balance {
        align-self: flex-end;

        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;

        .body3 {
          align-self: flex-end;
        }
      }

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
  import UserImage from '../../../uis/UserImage.svelte';
</script>

<div class="container">
  <div class="title">
    <div class="body1">dooboolab 커뮤니티</div>
    <div class="manage body3">가계부 관리</div>
  </div>
  <div class="card">
    <div class="body1">dooboolab</div>
    <div clsas="body3">PREMIUM ACCOUNT</div>
    <div class="owner">
      <UserImage src="" />
      <div class="body4">
        <div>대표관리자</div>
        <div class="body5">hanna</div>
      </div>
    </div>
    <div class="balance">
      <div class="body3">현재 잔액</div>
      <div class="heading3">100,000원</div>
    </div>
  </div>
  <div class="usage">Usage</div>
  <div class="amount">Amount</div>
  <div class="sponsor">Sponsor</div>
</div>
