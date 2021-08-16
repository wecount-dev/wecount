<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script lang="ts">
  import Button from '../uis/Button.svelte';
  import EditText from '../uis/EditText.svelte';
  import {createCommunity} from '../../services/communityService';
  import {user} from '../../stores/sessionStore';

  const requestCreateCommunity = async () => {
    if ($user) {
      const community = await createCommunity($user.id, {
        name: 'dooboolab-community',
        currency: 'KRW',
        color: null,
        description: 'Hi dooboolab',
        isPublic: true,
      });

      console.log('community', community);
    }
  };
</script>

<main>
  <EditText
    containerStyle="width: 80%;"
    inputStyle="font-size: 14px;"
    type="text"
  />
  <Button
    on:click={requestCreateCommunity}
    style="color: black; font-size: 14px; align-self: stretch; margin: 12px 10%;"
  >
    <div>Create Community</div>
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
</main>
