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

    @media (--mobile) {
      width: 100%;
    }
  }

  .crown {
    position: absolute;
    top: 0px;
    right: -2px;
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
    text-align: left;

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
    text-align: left;
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
  import {SvgCrown, SvgLock} from '../utils/icons';
  import {_} from 'svelte-i18n';
  import {decoPrice} from '../utils/functions';
  import UserImage from './user-image.svelte';

  export let name = '';
  export let description = '';
  export let profileURL = '';
  export let isPublic = true;
  export let balance: number | undefined = undefined;
  export let currency = '';
  export let style = '';
</script>

<div class="card" style={style}>
  <div class="title">
    <div class="body1">
      {#if !isPublic}
        <div class="lock">
          <img src={SvgLock} alt="lock" />
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
        <img src={SvgCrown} alt="crown" />
      </div>
    </div>
    <div class="user">
      <div class="user-role">{$_('owner')}</div>
      <div class="user-name">{name}</div>
    </div>
  </div>
  {#if balance}
    <div class="balance">
      <div class="body3">{$_('balance')}</div>
      <div class="heading3">
        {decoPrice({
          price: balance,
          currency,
        })}
      </div>
    </div>
  {/if}
</div>
