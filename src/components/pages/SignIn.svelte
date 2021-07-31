<style lang="scss">
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
      padding: 60px 70px;
      width: 60%;
      height: 654px;
      background: #ffffff;
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      border-radius: 16px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<script lang="ts">
  import supabase from '../../lib/db';
  import {SvgLogo} from '../../utils/Icon';
  import Button from '../uis/Button.svelte';
  import {_} from 'svelte-i18n';

  let loading = false;
  let email: string;
  let password: string;

  const handleAuthException = async (callback: () => Promise<Error | null>) => {
    try {
      loading = true;
      const error = await callback();

      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };

  const handleLogin = async () => {
    await handleAuthException(async () => {
      const {error} = await supabase.auth.signIn({email, password});

      return error;
    });
  };

  const handleSignUp = async () => {
    await handleAuthException(async () => {
      const {error} = await supabase.auth.signUp({email, password});

      return error;
    });
  };
</script>

<main>
  <form on:submit|preventDefault={handleLogin}>
    <SvgLogo />
    <h1>{$_('SignIn.login')}</h1>
    <input type="email" placeholder="Your email" bind:value={email} />
    <input type="password" placeholder="Your password" bind:value={password} />
    <input
      type="submit"
      value={loading ? $_('loading') : $_('SignIn.sign_in')}
      disabled={loading}
    />
    <Button on:click={handleSignUp}>Sign Up</Button>
  </form>
</main>
