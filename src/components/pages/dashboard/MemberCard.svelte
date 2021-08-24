<style lang="postcss">
  .member-card {
    width: 346px;
    height: 174px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .sub-heading {
    font-weight: bold;
  }
  .members {
    display: flex;
    justify-content: space-between;
  }
  .member-number {
    color: var(--green70);
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import type {UserType} from '../../../types';
  import Card from '../../uis/Card.svelte';
  import CircleImage from '../../uis/CircleImage.svelte';
  import MemberContainer from './MemberContainer.svelte';
  import PlusButton from './PlusButton.svelte';
  import TextLink from './TextLink.svelte';

  export let members: UserType[];
  export let style: string | undefined = undefined;
</script>

<div class="member-card" style={style}>
  <Card cardStyle={'padding: 28px;'}>
    <div class="header">
      <div>
        <span class="sub-heading">{$_('member')}</span>
        {#if members.length > 4}
          <span class="member-number">({members.length})</span>
        {/if}
      </div>
      <TextLink name={$_('Dashboard.manage_members')} href={'/member'} />
    </div>
    <div class="members">
      {#each members.slice(0, 4) as member}
        <MemberContainer name={member.name}>
          <CircleImage src={member.imageUrl} style={'width: 48px;'} />
        </MemberContainer>
      {/each}
      <MemberContainer name="Add">
        <PlusButton />
      </MemberContainer>
    </div>
  </Card>
</div>
