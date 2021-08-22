<style lang="postcss">
  .summary-card {
    width: 654px;
    height: 379px;
  }
  .community-name {
    font-weight: bold;
    margin-bottom: 13px;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';

  import type {CommunityType, UserType} from '../../../types';

  import Card from '../../uis/Card.svelte';
  import CommunityCard from '../../uis/CommunityCard.svelte';

  export let community: CommunityType;
  export let user: UserType;
</script>

<div class="summary-card">
  <Card cardStyle={'height: 100%; padding: 28px; 24px;'}>
    <div class="sub-heading community-name">
      {community.name}
      {$_('community')}
    </div>
    <div>
      <CommunityCard
        user={user}
        community={community}
        balance={100000}
        cardStyle={'background-color: var(--primary)'}
      />
    </div>
  </Card>
</div>
