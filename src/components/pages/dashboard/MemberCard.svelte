<style lang="postcss">
  .member-card {
    width: 366px;
    height: 174px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .members {
    display: flex;
    justify-content: space-between;
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
      <span class="sub-heading">{$_('member')}</span>
      <TextLink name={$_('Dashboard.manage_members')} href={'/member'} />
    </div>
    <div class="members">
      {#each members as member}
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
