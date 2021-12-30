<style lang="postcss">
  .add {
    background-color: var(--background);
    padding: 28px;
    border-radius: 16px;
    min-width: 472px;
    min-height: 720px;
    text-align: left;

    display: grid;
    grid-template-rows: min-content 1fr min-content;

    .head {
      .user {
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }

        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 16px;
        }

        p {
          margin-left: 8px;
        }
      }

      .close {
        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }

      display: grid;
      grid-template-columns: 1fr min-content;
    }

    .content {
      padding: 32px 0;

      display: grid;
      grid-auto-flow: row;
      row-gap: 20px;
      grid-template-rows: repeat(auto-fill, minmax(40px, auto));

      .wrapper {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 88px 1fr;

        .input {
          display: grid;
          grid-auto-flow: column;
          justify-items: center;
        }
      }
    }

    .foot {
      display: grid;
      grid-auto-flow: column;
      justify-items: center;
      align-items: center;

      :global(button) {
        width: 120px;
        border-color: var(--primary);
      }
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../../types/supabase';
  import {_} from 'svelte-i18n';
  import {SvgClose, SvgNoProfile} from '../../../../utils/icons';
  import Button from '../../../../layouts/button.svelte';
  import {createEventDispatcher} from 'svelte';

  export let user: definitions['User'];

  const thumbURL = user?.avatarUrlThumb || user?.avatarUrl || SvgNoProfile;
  const displayName = user?.displayName || user?.name || $_('unnamed');

  const dispatch = createEventDispatcher();

  const handleClose = () => {
    dispatch('close');
  };

  const addFeed = () => {
    console.log('add feed');
  };
</script>

<div class="add">
  <div class="head">
    <div class="user">
      <img src={thumbURL} alt="" />
      <p>{displayName}</p>
    </div>
    <img class="close" src={SvgClose} alt="" on:click={handleClose} />
  </div>
  <div class="content">
    <div class="wrapper">
      <div class="label">구분</div>
      <div class="input">
        <div>수입</div>
        <div>지출</div>
      </div>
    </div>
  </div>
  <div class="foot">
    <Button primary on:click={addFeed}>
      <div class="body3">{$_('add')}</div>
    </Button>
  </div>
</div>
