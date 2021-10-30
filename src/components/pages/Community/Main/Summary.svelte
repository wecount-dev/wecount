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
      'title  manage'
      'card   usage'
      'card   usage'
      'card   usage'
      'amount sponsoring';

    @media (--mobile) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }

    div {
      display: flex;
      align-items: center;
      color: var(--text);
    }

    div:first-child {
      grid-area: title;
    }

    div:nth-child(2) {
      grid-area: manage;
      color: var(--text-light);

      justify-content: flex-end;
    }

    div:nth-child(3) {
      grid-area: card;
      background-color: var(--card);
      border: 1px solid var(--border);
      box-sizing: border-box;
      border-radius: 16px;
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      padding: 54px 26px;

      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      @media (--mobile) {
      }
    }

    div:nth-child(4) {
      grid-area: usage;
      background-color: #666;
    }

    div:nth-child(5) {
      grid-area: amount;
      background-color: #777;
    }

    div:nth-child(6) {
      grid-area: sponsoring;
      background-color: #888;
    }
  }
</style>

<div class="container">
  <div class="body1">dooboolab 커뮤니티</div>
  <div class="body3">가계부 관리</div>
  <div>
    <div>dooboolab</div>
    <div>PREMIUM ACCOUNT</div>
  </div>
  <div>Usage</div>
  <div>Amount</div>
  <div>Sponsoring</div>
</div>
