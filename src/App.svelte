<style global lang="postcss">
  :global(body) {
    --green20: #CBFFDD;
    --green30: #7EE2D3;
    --green40: #28DB98;
    --green70: #0DB293;
    --green80: #00715B;
    --green90: #074539;
    --gray10: #F9F9F9;
    --gray20: #F3F4F5;
    --gray30: #E3E4E5;
    --gray40: #D0D1D3;
    --gray50: #B5B6B9;
    --gray60: #8E9095;
    --gray70: #76777D;
    --gray80: #4C4D53;
    --gray90: #2A2A2C;
    --gray100: #1B1B1C;
    --blue10: #F0F5FF;
    --blue50: #3A74E7;
    --blue90: #061178;
    --yellow10: #FFFBE6;
    --yellow50: #FFC53D;
    --yellow90: #874D00;
    --red10: #FFF2E8;
    --red50: #F15454;
    --red90: #871400;

    --positive: var(--green50);
    --negative: var(--red50);
    --info: var(--blue50);
    --warn: var(--yellow50);

    --button: var(--green80);
    --text: var(--gray100);

    background-color: var(--gray10);
    color: var(--gray100);
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    --button: var(--green30);
    --text: var(--gray10);

    background-color: var(--gray100);
    color: var(--gray10);
  }

  main { display: grid; }
</style>

<script>
  import './i18n';
  import {user} from './stores/sessionStore';
  import supabase from './lib/db';
  import Auth from './components/navigations/Auth.svelte';
  import Main from './components/navigations/Main.svelte';

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user);
  });
</script>

<main>
  {#if $user}
    <Main />
  {:else}
    <Auth />
  {/if}
</main>
