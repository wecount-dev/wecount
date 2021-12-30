<style lang="postcss">
  .register-item {
    display: grid;
    grid-auto-flow: column;
    height: 48px;
    text-overflow: ellipsis;
    text-align: left;

    .user {
      padding-left: 24px;
      padding-right: 12px;
      justify-self: left;

      display: grid;
      grid-auto-flow: column;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        background-color: var(--disabled);
      }

      p {
        text-align: left;

        overflow: hidden;
        padding: 0 16px;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    div:nth-child(2) {
      display: grid;
      justify-self: right;
      grid-auto-flow: column;

      p {
        display: grid;
        font-size: 0.875rem;
        align-items: center;
        text-align: center;
        font-weight: bold;

        &:nth-child(1) {
          color: var(--info);
        }

        &:nth-child(2) {
          color: var(--placeholder);
          margin-left: 8px;
          margin-right: 20px;
        }

        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../../../types/supabase';
  import {_} from 'svelte-i18n';
  import {createEventDispatcher} from 'svelte';
  import {SvgNoProfile} from '../../../../../utils/icons';

  export let member: definitions['User'];

  const thumbURL = member?.avatarUrlThumb || member?.avatarUrl || SvgNoProfile;
  const displayName = member?.displayName || member?.name || $_('unnamed');
  const dispatch = createEventDispatcher();

  const handleImageError = (e: any) => {
    e.target.src = SvgNoProfile;
  };

  function handleAccept() {
    dispatch('accept');
  }

  function handleReject() {
    dispatch('reject');
  }
</script>

<div class="register-item">
  <div class="user">
    <img src={thumbURL} alt="" on:error={handleImageError} />
    <p>{displayName}</p>
  </div>
  <div>
    <p on:click={handleAccept}>{$_('settings.accept')}</p>
    <p on:click={handleReject}>{$_('settings.reject')}</p>
  </div>
</div>
