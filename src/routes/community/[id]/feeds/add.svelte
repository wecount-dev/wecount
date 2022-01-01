<style lang="postcss">
  .add {
    background-color: var(--background);
    padding: 28px;
    border-radius: 16px;
    min-width: 472px;
    min-height: 500px;
    text-align: left;

    display: grid;
    grid-template-rows: min-content 1fr min-content;

    @media (--mobile) {
      padding: 12px;
      margin-left: 64px;
      margin-right: 10px;
      min-width: 100px;
      width: 80%;
      z-index: 1000;
    }

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

      .wrapper {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 88px 1fr;
        align-items: center;

        .category {
          display: grid;
          grid-auto-flow: column;
          justify-items: center;
        }

        .picture {
          display: grid;
          grid-auto-flow: row-dence;
          grid-auto-rows: min-content;
          grid-template-columns: repeat(auto-fill, minmax(72px, auto));

          @media (--mobile) {
            overflow-x: auto;
            grid-auto-flow: column;
          }
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
  import EditText from '../../../../layouts/edit-text.svelte';
  import UploadablePhotoCard from '../../../../layouts/uploadable-photo-card.svelte';

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
      <div class="label">{$_('category')}</div>
      <div class="category">
        <div>{$_('income')}</div>
        <div>{$_('consume')}</div>
      </div>
    </div>
    <div class="wrapper">
      <div class="label">{$_('price')}</div>
      <EditText />
    </div>
    <div class="wrapper">
      <div class="label">{$_('content')}</div>
      <EditText numOfLines={6} />
    </div>
    <div class="wrapper">
      <div class="label">{$_('picture')}</div>
      <div class="picture">
        <UploadablePhotoCard />
        <UploadablePhotoCard />
        <UploadablePhotoCard />
      </div>
    </div>
  </div>
  <div class="foot">
    <Button primary on:click={addFeed}>
      <p class="body3">{$_('add')}</p>
    </Button>
  </div>
</div>
