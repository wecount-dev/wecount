<style lang="postcss">
  .summary-card {
    width: 614px;
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
  import {showAmount} from '../../../utils/functions';
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
    {
      name: `${String($_('Dashboard.last'))} 1${String($_('Dashboard.week'))}`,
      component: depositComponent,
    },
    {
      name: `${String($_('Dashboard.last'))} 1${String($_('Dashboard.month'))}`,
      component: depositComponent,
    },
    {
      name: `${String($_('Dashboard.last'))} 3${String($_('Dashboard.month'))}`,
      component: depositComponent,
    },
  ];
</script>

<div class="summary-card">
  <Card
    cardStyle={'height: 100%; padding: 28px; 24px; display: flex; gap: 20px;'}
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
          cardStyle={'background-color: var(--primary); width: 310px;'}
        />
      </div>
      <div>
        <ProgressBar completed={40} progressBarStyle={'width: 100%;'} />
        <div class="remaining-amount">
          <span>{$_('Dashboard.remaining_amount')}</span>
          <div>
            <span class="p2">{showAmount(100000, community.currency)}</span> /
            <span class="p2" style="color: var(--gray50)">
              {showAmount(10000, community.currency)}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="management-link">
        <TextLink
          name={$_('Dashboard.account_book_management')}
          href={'/price'}
        />
      </div>
      <TabNavigation tabs={tabs} tabNavigationStyle={'max-height: 240px'} />
      <Button primary={true} style={'width: 100%;'}>
        {$_('Dashboard.sponsoring')}
      </Button>
    </div>
  </Card>
</div>
