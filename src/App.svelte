<style global lang="postcss">
  :global(body) {
    --green20: #cbffdd;
    --green30: #7ee2d3;
    --green40: #28db98;
    --green70: #0db293;
    --green80: #00715b;
    --green90: #074539;
    --gray10: #f9f9f9;
    --gray20: #f3f4f5;
    --gray30: #e3e4e5;
    --gray40: #d0d1d3;
    --gray50: #b5b6b9;
    --gray60: #8e9095;
    --gray70: #76777d;
    --gray80: #4c4d53;
    --gray90: #2a2a2c;
    --gray100: #1b1b1c;
    --blue10: #f0f5ff;
    --blue50: #3a74e7;
    --blue90: #061178;
    --yellow10: #fffbe6;
    --yellow50: #ffc53d;
    --yellow90: #874d00;
    --red10: #fff2e8;
    --red50: #f15454;
    --red90: #871400;

    --positive: var(--green50);
    --negative: var(--red50);
    --info: var(--blue50);
    --warn: var(--yellow50);

    --button: var(--gray10);
    --text: var(--gray100);
    --link: var(--gray60);
    --border: var(--gray30);
    --input-focus: var(--gray80);
    --background-color: white;
    --primary: var(--green70);

    background-color: var(--background-color);
    color: var(--gray100);
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    --button: var(--green30);
    --text: var(--gray10);

    background-color: var(--background-color);
    color: var(--gray10);
  }

  main {
    display: grid;
  }
</style>

<script>
  import './i18n';
  import {user} from './stores/sessionStore';
  import supabase from './lib/db';
  import Main from './components/navigations/Main.svelte';

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user);
  });
</script>

<main><Main /></main>
