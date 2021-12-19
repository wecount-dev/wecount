<style lang="postcss">
  .container {
    cursor: pointer;
    width: 74px;
    height: 70px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      color: var(--light);
    }

    p {
      margin-top: 6px;
      font-size: 14px;
    }
  }
</style>

<script>
  import {_} from 'svelte-i18n';
  import UserImage from './user-image.svelte';

  export let name = $_('unnamed');
  export let imageURL;
</script>

<div class="container">
  <UserImage src={imageURL} />
  <p>{name}</p>
</div>
