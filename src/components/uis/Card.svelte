<style lang="postcss">
  .card {
    background-color: var(selectedColor);
    width: 330px;
    height: 210px;
    box-sizing: border-box;
    border-radius: 24px;
    box-shadow: 0px 4px 10px #d1f1ff, inset 0px 0px 142px #ebfbff;
    padding: 28px 24px;
  }

  .profile-img-layout {
    position: relative;
    display: inline-block;
    margin-right: 9px;
  }

  .profile-img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .crown {
    position: absolute;
    top: -2px;
    right: -5px;
    background-color: #ffc53d;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .community-layout {
    margin-bottom: 13px;
  }

  .community-name {
    color: white;
    font-size: 1.2rem;
  }

  .coummunity-name-layout {
    display: flex;
  }

  .community-description {
    color: #f0f5ff;
    text-transform: uppercase;
  }

  .user-layout {
    display: flex;
    align-items: center;
  }

  .user-role {
    color: #f3f4f5;
    font-size: 0.7rem;
  }

  .user-name {
    color: white;
    font-size: 0.8rem;
  }

  .lock {
    display: flex;
    align-items: center;
    margin-right: 2px;
  }

  .balance-layout {
    text-align: right;
    margin-top: 7px;
  }

  .balance-title {
    font-size: 14px;
    color: #f0f5ff;
  }

  .balance {
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
  }
</style>

<script lang="ts">
  import {SvgCrown, SvgLock} from '../../utils/Icon';
  import type {CommunityType, UserType} from '../../types/index.svelte';
  import {_} from 'svelte-i18n';

  export let community: CommunityType;
  export let user: UserType;
  export let balance: number | undefined = undefined;
  export let communityNameStyle: string | undefined = undefined;
  export let cardStyle: string | undefined = undefined;

  const addCommaForBalance = (): string | void => {
    if (balance !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const localCurrency = String($_('card.local_currency'));

      return `${balance.toLocaleString()}  ${localCurrency}`;
    }
  };

  const displayBalance = addCommaForBalance();
</script>

<div class="card" style={cardStyle}>
  <div class="community-layout">
    <div class="coummunity-name-layout">
      {#if !community.isPublic}
        <div class="lock">
          <SvgLock />
        </div>
      {/if}
      <div class="community-name" style={communityNameStyle}>
        {community.name}
      </div>
    </div>
    <div class="community-description">
      {community.description}
    </div>
  </div>
  <div class="user-layout">
    <div class="profile-img-layout">
      <img class="profile-img" src={user.imageUrl} alt={user.name} />
      <div class="crown">
        <SvgCrown />
      </div>
    </div>
    <div>
      <div class="user-role">{user.role}</div>
      <div class="user-name">{user.name}</div>
    </div>
  </div>
  {#if balance}
    <div class="balance-layout">
      <div class="balance-title">{$_('card.current_balance')}</div>
      <div class="balance">
        {displayBalance}
      </div>
    </div>
  {/if}
</div>
