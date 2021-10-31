<style lang="postcss">
  .card {
    background-color: var(--color);
    border: 1px solid var(--border);
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0px 24px 42px var(--box-shadow12);
    padding: 26px;
    max-height: 212px;
    width: 330px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .crown {
    position: absolute;
    top: -2px;
    right: -5px;
    background-color: #0db293;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 13px;
    color: white;

    .body1 {
      display: flex;
    }
  }
  .description {
    color: #f0f5ff;
  }

  .profile {
    display: flex;
    align-items: center;

    .image {
      position: relative;
      display: inline-block;
      margin-right: 9px;
    }
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

  .balance {
    margin-top: 8px;
    align-self: flex-end;
    color: white;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    .body3 {
      align-self: flex-end;
    }
  }
</style>

<script lang="ts">
  import {SvgCrown, SvgLock} from '../../utils/Icon';
  import {_} from 'svelte-i18n';
  import {decoPrice} from '../../utils/functions';
  import UserImage from './UserImage.svelte';
  import {GREEN} from '../../theme';

  export let color = GREEN;
  export let name = '';
  export let description = '';
  export let profileURL = '';
  export let isPublic = true;
  export let balance: number | undefined = undefined;
  export let currency = '';
  export let style = '';
</script>

<div class="card" style={`--color: ${color}; ${style}`}>
  <div class="title">
    <div class="body1">
      {#if !isPublic}
        <div class="lock">
          <SvgLock />
        </div>
      {/if}
      {name}
    </div>
    <div class="description">
      {description}
    </div>
  </div>
  <div class="profile">
    <div class="image">
      <UserImage src={profileURL} alt={name} />
      <div class="crown">
        <SvgCrown />
      </div>
    </div>
    <div>
      <div class="user-role">{$_('owner')}</div>
      <div class="user-name">{name}</div>
    </div>
  </div>
  {#if balance}
    <div class="balance">
      <div class="body3">{$_('current_balance')}</div>
      <div class="heading3">
        {decoPrice({
          price: balance,
          currency,
        })}
      </div>
    </div>
  {/if}
</div>
