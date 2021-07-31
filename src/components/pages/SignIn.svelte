<style lang="scss">
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    display: flex;
    align-items: center;
    justify-content: center;

    .card {
      padding: 60px 70px;
      width: 60%;
      height: 654px;
      background: #FFFFFF;
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      border-radius: 16px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<script lang="ts">
  import supabase from '../../lib/db';
  import Button from '../uis/Button.svelte';

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
  <div class="card">
    <form on:submit|preventDefault={handleLogin}>
      <div>
        <h1>Supabase + Svelte</h1>
        <p>Sign in via magic link with your email below</p>
        <div>
          <input
            type="email"
            placeholder="Your email"
            bind:value={email}
          />
          <input
            type="password"
            placeholder="Your password"
            bind:value={password}
          />
        </div>
        <div>
          <input
            type="submit"
            value={loading ? 'Loading' : 'Sign In'}
            disabled={loading}
          />
          <Button on:click={handleSignUp}>Sign Up</Button>
        </div>
      </div>
    </form>
  </div>
</main>