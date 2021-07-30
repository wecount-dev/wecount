<script lang="ts">
  import supabase from '../../lib/db';
  import Button from '../uis/Button.svelte';

  let loading = false;
  let email: string;
  let password: string;

  const handleAuthExeption = async (callback: () => Promise<Error | null>) => {
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
    await handleAuthExeption(async () => {
      const {error} = await supabase.auth.signIn({email, password});

      return error;
    });
  };

  const handleSignUp = async () => {
    await handleAuthExeption(async () => {
      const {error} = await supabase.auth.signUp({email, password});

      return error;
    });
  };
</script>

<form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
  <div class="col-6 form-widget">
    <h1 class="header">Supabase + Svelte</h1>
    <p class="description">Sign in via magic link with your email below</p>
    <div>
      <input
        class="inputField"
        type="email"
        placeholder="Your email"
        bind:value={email}
        required
      />
      <input
        class="inputField"
        type="password"
        placeholder="Your password"
        bind:value={password}
        required
      />
    </div>
    <div>
      <input
        type="submit"
        class="button block"
        value={loading ? 'Loading' : 'Sign In'}
        disabled={loading}
      />
      <Button on:click={handleSignUp}>Sign Up</Button>
    </div>
  </div>
</form>
