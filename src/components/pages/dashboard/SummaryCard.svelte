<style lang="postcss">
  .summary-card {
    width: 654px;
    height: 379px;
  }
  .community-name {
    font-weight: bold;
    margin-bottom: 13px;
  }
  .community-card {
    margin-bottom: 34px;
  }
  .remaining-amount {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
  }
  .management-link {
    text-align: right;
    margin-top: 3px;
    margin-bottom: 20px;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import type {CommunityType, UserType} from '../../../types';
  import Button from '../../uis/Button.svelte';
  import Card from '../../uis/Card.svelte';
  import CommunityCard from '../../uis/CommunityCard.svelte';
  import ProgressBar from '../../uis/ProgressBar.svelte';
  import TabNavigation from '../../uis/TabNavigation.svelte';
  import DepositList from './DepositList.svelte';
  import TextLink from './TextLink.svelte';

  export let community: CommunityType;
  export let user: UserType;

  const depositComponent = {
    component: DepositList,
    props: {
      deposits: community.deposit,
    },
  };

  const tabs = [
    {name: '최근 1주', component: depositComponent},
    {name: '최근 1개월', component: depositComponent},
    {name: '최근 1개월', component: depositComponent},
  ];

  const printPrice = (price: number) =>
    price.toLocaleString(undefined, {
      style: 'currency',
      currency: community.currency,
      currencyDisplay: 'symbol',
    });
</script>

<div class="summary-card">
  <Card
    cardStyle={'height: 100%; padding: 28px; 24px; display: flex; gap: 46px;'}
  >
    <div>
      <div class="sub-heading community-name">
        {community.name}
        {$_('community')}
      </div>
      <div class="community-card">
        <CommunityCard
          user={user}
          community={community}
          balance={100000}
          cardStyle={'background-color: var(--primary)'}
        />
      </div>
      <div>
        <ProgressBar completed={40} progressBarStyle={'width: 100%;'} />
        <div class="remaining-amount">
          <span>남은 금액</span>
          <div>
            <span class="p2">{printPrice(100000)}</span> /
            <span class="p2" style="color: var(--gray50)">
              {printPrice(10000)}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="management-link">
        <TextLink name="가계부관리" href={'/price'} />
      </div>
      <TabNavigation tabs={tabs} />
      <Button primary={true} style={'width: 100%;'}>후원하기</Button>
    </div>
  </Card>
</div>
