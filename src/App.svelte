<style global lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

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
    --placeholder: var(--gray10);
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
    --placeholder: var(--gray80);
    --text: var(--gray10);
    --background-color: var(--gray100);

    background-color: var(--background-color);
    color: var(--gray10);
  }

  * {
    font-family: 'Spoqa Han Sans Neo';
    color: var(--gray100);
  }

  :global(h1) {
    font-size: 2.625rem;
    line-height: 63px;
  }

  :global(h2) {
    font-size: 2rem;
    line-height: 48px;
  }

  :global(h3) {
    font-size: 1.75rem;
    line-height: 42px;
  }

  :global(h4) {
    font-size: 1.625rem;
    line-height: 40px;
  }

  :global(h5) {
    font-size: 1.5rem;
    line-height: 36px;
  }

  :global(h6) {
    font-size: 1.25rem;
    line-height: 30px;
  }

  :global(p) {
    font-size: 1rem;
    line-height: 32px;
  }

  :global(.p2) {
    font-size: 0.875rem;
    line-height: 22px;
  }

  :global(.sub-heading) {
    font-size: 1.125rem;
    line-height: 31px;
  }

  :global(caption) {
    font-size: 0.75rem;
    line-height: 21px;
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
  import {upsertUser} from './services/userService';

  supabase.auth.onAuthStateChange((_, session) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (session?.user) upsertUser(session.user);

    user.set(session?.user);
  });
</script>

<main><Main /></main>
