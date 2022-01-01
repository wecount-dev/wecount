<style lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @custom-media --mobile-sm (max-width: 400px);
  @custom-media --mobile (max-width: 640px);
  main {
    background-color: var(--background);
    color: var(--text);
    text-align: center;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import './i18n';
  import type {ThemeStore} from 'svelte-theme';
  import {Router} from '@roxi/routify';
  import routes from '../.routify/routes.default.js';
  import {getContext} from 'svelte';
  import supabase from './lib/db';
  import {user} from './stores/sessionStore';
  import {upsertUser} from './services/userService';
  import type {definitions} from './types/supabase';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  const toggleTheme = () => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.') {
        changeThemeType();
      }
    });
  };

  supabase.auth.onAuthStateChange((e, session) => {
    if (e === 'SIGNED_OUT') {
      user.set(null);
    }

    if (e === 'SIGNED_IN' && session) {
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
    }
  });

  toggleTheme();
</script>

<main>
  <Router routes={routes} />
</main>
