<style global lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @custom-media --mobile (max-width: 640px);

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

  :global(.heading4) {
    font-size: 24px;
    font-weight: bold;
  }

  :global(.heading5) {
    font-size: 20px;
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
</style>

<script lang="ts">
  import './i18n';
  import type {definitions} from './types/supabase';
  import type {ThemeStore} from 'svelte-theme';
  import {getContext} from 'svelte';

  import {user} from './stores/sessionStore';
  import supabase from './lib/db';
  import Main from './components/navigations/index.svelte';
  import {upsertUser} from './services/userService';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/ko';
  import dayjs from 'dayjs';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  // dayjs.locale('ko'); // TODO
  dayjs.extend(relativeTime);

  const toggleTheme = () => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.') changeThemeType();
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

<Main />
