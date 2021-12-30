<style lang="postcss">
  .register-item {
    display: grid;
    grid-auto-flow: column;
    height: 48px;
    text-overflow: ellipsis;
    text-align: left;
    padding: 0 24px;
    align-items: center;

    .user {
      padding-right: 12px;

      display: grid;
      grid-template-columns: 48px 1fr;
      grid-auto-flow: column;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }

      p {
        margin-left: 12px;
        overflow: hidden;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    .options {
      justify-self: right;
      display: grid;
      grid-auto-flow: column;

      .trash-wrapper {
        padding-top: 4px;
        margin-left: 8px;
        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../../../types/supabase';

  import {createEventDispatcher} from 'svelte';
  import {_} from 'svelte-i18n';
  import Select from '../../../../../layouts/select.svelte';
  import {SvgNoProfile, SvgTrash} from '../../../../../utils/icons';

  export let member: definitions['User'];

  const thumbURL = member?.avatarUrlThumb || member?.avatarUrl || SvgNoProfile;
  const displayName = member?.displayName || member?.name || $_('unnamed');
  const roleOptions = [$_('role.owner'), $_('role.admin'), $_('role.member')];
  let selectedRoleOption = roleOptions[0];
  const dispatch = createEventDispatcher();

  const selectRoleOption = (e: CustomEvent<string>) =>
    (selectedRoleOption = e.detail);

  function handleDelete() {
    dispatch('delete');
  }
</script>

<div class="register-item">
  <div class="user">
    <img src={thumbURL} alt="" />
    <p>{displayName}</p>
  </div>
  <div class="options">
    <Select
      slot="input"
      style={'width: 100%'}
      value={selectedRoleOption}
      options={roleOptions}
      on:change={selectRoleOption}
    />
    <div class="trash-wrapper" on:click={handleDelete}>
      <img src={SvgTrash} alt="trash" />
    </div>
  </div>
</div>
