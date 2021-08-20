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
  import Card from '../../uis/Card.svelte';
  import CircleImage from '../../uis/CircleImage.svelte';
  import TextLink from './TextLink.svelte';

  const members = [
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
  ];
</script>

<div class="member-card">
  <Card cardStyle={'padding: 28px;'}>
    <div class="header">
      <span class="sub-heading">{$_('member')}</span>
      <TextLink name={$_('Dashboard.manage_members')} href={'/member'} />
    </div>
    <div class="members">
      {#each members as member}
        <CircleImage src={member} style={'width: 48px;'} />
      {/each}
    </div>
  </Card>
</div>
