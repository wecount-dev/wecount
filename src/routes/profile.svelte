<style lang="postcss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      width: 400px;
      flex: 1;
      align-self: center;
      padding: 80px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (--mobile) {
        width: 80%;
        padding: 0;
      }

      div {
        width: 100%;

        label {
          left: 0;
          text-align: left;
          width: 100%;
          margin-bottom: 3px;
        }

        input {
          width: 100%;
        }
      }

      .profile-image-container {
        position: relative;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: 5px solid var(--info);
        margin: 40px auto;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.8);

        .profile-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: 100% 100%;
          left: 0;
        }

        input[type='file'] {
          position: absolute;
          bottom: -4px;
          left: 0;
          outline: none;
          color: transparent;
          width: 100%;
          box-sizing: border-box;
          padding: 8px 32px;
          cursor: pointer;
          transition: 0.5s;
          background: black;
          opacity: 0.5;

          &:hover {
            opacity: 1;
          }

          &::-webkit-file-upload-button {
            visibility: hidden;
          }

          &::before {
            font-family: Material Icons;
            content: 'photo_camera';
            font-size: 32px;
            color: white;
            display: inline-block;
            margin-left: 22px;
            -webkit-user-select: none;
          }
        }
      }
    }
  }
</style>

<script lang="ts">
  import {uploadSingleImage} from '../services/storageService';
  import Button from '../layouts/button.svelte';
  import {_} from 'svelte-i18n';
  import supabase from '../lib/db';
  import {user} from '../stores/sessionStore';
  import {onMount} from 'svelte';
  import {goto, url} from '@roxi/routify';
  import {SvgNoProfile} from '../utils/icons';

  let loading = true;
  let files: HTMLInputElement;
  let name = '';
  let displayName = '';
  let avatarUrl = SvgNoProfile;

  onMount(() => {
    if (!$user) {
      $goto($url('/auth/sign-in'));
    }
  });

  function getProfile(_node: HTMLFormElement): SvelteActionReturnType {
    try {
      loading = true;
      name = $user?.name || '';
      displayName = $user?.displayName || '';
      avatarUrl = $user?.avatarUrl || '';

      return {
        destroy() {
          // the node has been removed from the DOM
        },
      };
    } catch (error: unknown) {
      alert(error);
    } finally {
      loading = false;
    }
  }

  const onFileSelected = async (e: any): Promise<void> => {
    try {
      let image = e.target.files?.[0];

      if (!image) {
        return;
      }

      loading = true;
      avatarUrl = (await uploadSingleImage({file: image})) || '';
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  };

  async function updateProfile() {
    try {
      loading = true;
      const currentUser = $user;
      const updates = {
        id: currentUser?.id,
        displayName,
        name,
        avatarUrl,
        updated_at: new Date(),
      };

      let {error} = await supabase
        .from('User')
        .update(updates, {
          returning: 'minimal', // Don't return the value after inserting
        })
        .match({id: $user?.id});

      if (error) {
        throw error;
      }

      if ($user) {
        $user.name = name;
        $user.displayName = displayName;
        $user.avatarUrl = avatarUrl;
      }
    } catch (error: unknown) {
      alert(error);
    } finally {
      loading = false;
    }
  }
  async function signOut() {
    try {
      loading = true;
      let {error} = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      $user = null;
      $goto('/');
    } catch (error: unknown) {
      alert(error);
    } finally {
      loading = false;
    }
  }
</script>

<div class="container">
  {#if $user}
    <form use:getProfile on:submit|preventDefault={updateProfile}>
      <div class="profile-image-container">
        <img class="profile-image" src={avatarUrl} alt=" " />
        <input
          bind:this={files}
          type="file"
          accept=".jpg, .jpeg, .png"
          disabled={loading}
          on:change={onFileSelected}
        />
      </div>
      <div class="input">
        <label for="email">{$_('email')}</label>
        <input id="email" type="text" value={$user?.email} disabled />
      </div>
      <div class="input" style="margin-top: 12px;">
        <label for="displayName">{$_('display_name')}</label>
        <input id="displayName" type="text" bind:value={displayName} />
      </div>
      <div class="input" style="margin-top: 12px;">
        <label for="name">{$_('name')}</label>
        <input id="name" type="text" bind:value={name} />
      </div>
      <Button
        positive
        style="margin-top: 16px; width: 100%;"
        type="submit"
        disabled={loading}
        loading={loading}
      >
        <div class="text" style="color: white;">
          {loading ? $_('loading') : $_('update')}
        </div>
      </Button>
      <Button
        on:click={signOut}
        negative
        style="margin-top: 12px; width: 100%;"
      >
        <div class="text" style="color: white;">
          {$_('sign_out')}
        </div>
      </Button>
    </form>
  {/if}
</div>
