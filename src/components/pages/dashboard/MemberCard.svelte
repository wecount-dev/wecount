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
  import MemberContainer from './MemberContainer.svelte';
  import PlusButton from './PlusButton.svelte';
  import TextLink from './TextLink.svelte';

  const members = [
    {
      name: 'Hyochan',
      imageUrl: 'https://picsum.photos/50/50?random=1',
    },
    {
      name: 'DevYuns',
      imageUrl: 'https://picsum.photos/50/50?random=2',
    },
    {
      name: 'KoreanThinker',
      imageUrl: 'https://picsum.photos/50/50?random=3',
    },
    {
      name: 'Jay-flow',
      imageUrl: 'https://picsum.photos/50/50?random=4',
    },
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
