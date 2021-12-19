<style lang="postcss">
  .container {
    grid-area: member;
    background-color: var(--card);
    padding: 0 20px 12px 20px;
    border-radius: 16px;

    display: grid;
    align-items: stretch;
    grid-auto-flow: row;
    row-gap: 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 72px 1fr;
    grid-template-areas:
      'title title'
      'member member';

    @media (--mobile) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 12px 20px 28px 20px;
    }

    .title {
      grid-area: title;
      padding-top: 8px;
      align-items: center;

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .more {
        cursor: pointer;
        color: var(--text-light);
        align-items: center;

        display: flex;

        &:hover {
          color: var(--text);
        }
      }

      @media (--mobile) {
        padding-bottom: 8px;
      }
    }

    .member {
      grid-area: member;

      display: flex;

      flex-direction: row;
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import MemberAvatar from '../../../../layouts/member-avatar.svelte';

  const clickMore = () => {
    console.log('click more');
  };
</script>

<div class="container">
  <div class="title">
    <div class="body1">{$_('member')}</div>
    <div class="more body3" on:click={clickMore}>
      {$_('more')}
      <i class="material-icons md-18">chevron_right</i>
    </div>
  </div>
  <div class="member">
    <MemberAvatar
      imageURL="https://dooboolab.com/static/media/wecount.f91954d1.png"
    />
    <MemberAvatar
      imageURL="https://avatars.githubusercontent.com/u/45788556?s=200&v=4"
    />
  </div>
</div>
