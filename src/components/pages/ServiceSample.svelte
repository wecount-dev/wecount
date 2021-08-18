<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>

<script lang="ts">
  import Button from '../uis/Button.svelte';
  import EditText from '../uis/EditText.svelte';
  import {
    createCommunity,
    getMyCommunites,
    updateCommunity,
  } from '../../services/communityService';
  import {user} from '../../stores/sessionStore';
  import type {definitions} from '../../types/supabase';

  let communityName: string;
  let community: definitions['Community'];

  const changeText = (e: CustomEvent) => {
    communityName = e.detail;
  };

  const requestCreateCommunity = async () => {
    if (!$user) return;

    const community = await createCommunity($user.id, {
      name: communityName,
      currency: 'KRW',
      color: 'red',
      description: 'Hi dooboolab',
      isPublic: true,
    });

    console.log('community', community);
  };

  const requestGetMyCommunities = async () => {
    if (!$user) return;

    const communities = await getMyCommunites($user.id);

    console.log('communities', communities);

    if (communities) community = communities?.[0];
  };

  const requestUpdateCommunity = async () => {
    if (!$user) return;

    const updated = await updateCommunity({
      id: 'f3c4d2ab-a85d-41f1-8cd7-52b600d1e449',
      name: communityName,
      currency: 'KRW',
      color: 'red',
      description: 'Hi dooboolab',
      isPublic: true,
    });

    console.log('community', updated);
  };
</script>

<main>
  <p class="title" style="margin-top: 8px;">Community Service</p>
  <EditText
    containerStyle="width: 80%;"
    inputStyle="font-size: 14px;"
    type="text"
    placeholder="community name"
    on:changed={changeText}
  />
  <Button
    on:click={requestCreateCommunity}
    style="color: black; font-size: 14px; align-self: stretch; margin: 12px 10%;"
  >
    <div>Create Community</div>
  </Button>
  <Button
    on:click={requestGetMyCommunities}
    style="color: black; font-size: 14px; align-self: stretch; margin: 12px 10%;"
  >
    <div>Get My Communities</div>
  </Button>
  <Button
    style="color: black; font-size: 14px; align-self: stretch; margin: 12px 10%;"
  >
    <div>Update Community</div>
  </Button>
  <Button
    style="color: black; font-size: 14px; align-self: stretch; margin: 12px 10%;"
  >
    <div>Delete Community</div>
  </Button>
  <p class="title" style="margin-top: 40px;">Community Service</p>
</main>
