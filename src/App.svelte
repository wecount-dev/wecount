<style global lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @custom-media --mobile (max-width: 640px);

  :global(body) {
    --background: #fff;
    --paper: #f2f5f6;
    --disabled: #c4c4c4;
    --text: #000;
    --text-light: #1b1b1b;
    --textContrast: #fff;
    --placeholder: #6d6d6d;
    --main: var(--primary);
    --main-dark: var(--primary-light);
    --card: #fff;
    --border: #d3d4d5;
    --link: #8e9095;
  }
  :global(body.dark-mode) {
    --background: #000;
    --paper: #2a2a2a;
    --disabled: #515151;
    --placeholder: #6d6d6d;
    --text: #fff;
    --text-light: #d3d3d3;
    --textContrast: #000;
    --main: var(--primary-light);
    --main-dark: var(--primary);
    --card: #1c1c1c;
    --border: #343536;
    --link: #a5a7ac;
  }
  :global(body) {
    --brand: #28db98;
    --primary: #0db293;
    --primary-light: #75d0b8;
    --secondary: #00d9d5;
    --success: #33ff2f;
    --danger: #ff002e;
    --warning: #f2df0f;
    --info: #3a74e7;
    --light: #ededed;
    --red: #ff728d;
    --orange: #f6a623;
    --yellow: #eed100;
    --green: #24cd97;
    --blue: #679eff;
    --purple: #b669f9;
  }

  body {
    font-family: Roboto;
    transition: background-color 0.3s;
    background-color: var(--background);
    color: var(--text);

    input {
      background-color: var(--background);
      color: var(--text);
      caret-color: var(--text);

      &:focus {
        outline: 1px solid var(--primary);
      }
    }

    textarea {
      background-color: var(--background);
      color: var(--text);
      caret-color: var(--text);
      box-sizing: border-box;
      -ms-overflow-style: none;
      scrollbar-width: none;
      resize: none;

      &:focus {
        outline: 1px solid var(--primary);
      }
    }
  }

  :global(.heading1) {
    font-size: 40px;
    font-weight: bold;
  }

  :global(.heading2) {
    font-size: 32px;
    font-weight: bold;
  }

  :global(.heading3) {
    font-size: 28px;
    font-weight: bold;
  }

  :global(.body1) {
    font-size: 20px;
  }

  :global(.body2) {
    font-size: 16px;
  }

  :global(.body3) {
    font-size: 14px;
  }

  :global(.body4) {
    font-size: 12px;
  }

  :global(.body5) {
    font-size: 10px;
  }

  main {
    display: grid;
  }
</style>

<script lang="ts">
  import './i18n';
  import {getContext} from 'svelte';
  import type {definitions} from './types/supabase';
  import type {ThemeStore} from 'svelte-theme';

  import {user} from './stores/sessionStore';
  import supabase from './lib/db';
  import Main from './components/navigations/Main';
  import {upsertUser} from './services/userService';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/ko';
  import dayjs from 'dayjs';

  const {theme} = getContext<ThemeStore>('theme');

  // dayjs.locale('ko'); // TODO
  dayjs.extend(relativeTime);

  const toggleTheme = () => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.')
        window.document.body.classList.toggle('dark-mode');
    });
  };

  supabase.auth.onAuthStateChange((e, session) => {
    if (e === 'SIGNED_OUT') user.set(null);

    if (e === 'SIGNED_IN' && session)
      (async () => {
        await upsertUser(session.user);

        let {data} = await supabase
          .from<definitions['User']>('User')
          .select(`displayName, name, avatarUrl`)
          .eq('id', session.user?.id)
          .single();

        user.set({
          ...session.user,
          avatarUrl: data?.avatarUrl || '',
          displayName: data?.displayName || '',
          name: data?.name || '',
        });
      })().catch((err) => console.log(err));
  });

  toggleTheme();
</script>

<main>
  <Main />
</main>
