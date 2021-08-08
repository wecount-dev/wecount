<style lang="postcss">
  main {
    background: linear-gradient(136.71deg, #17b87c 21.32%, #01886f 96.51%);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    display: flex;
    align-items: center;
    justify-content: center;

    .link {
      text-decoration: underline;
      color: var(--link);

      display: flex;
      align-items: center;
    }

    form {
      padding: 60px 70px;
      width: 60%;
      height: 654px;
      background: #ffffff;
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      border-radius: 16px;
      max-height: 654px;
      max-width: 640px;
      align-self: center;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: 640px) {
        width: 100%;
        border-radius: 0;
        padding: 0;
      }

      .container-options {
        align-self: stretch;
        margin: 0 10%;

        margin-top: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .btn-sign-in {
        height: 40px;
        margin: 40px 10% 0 10%;
        align-self: stretch;
        background-color: var(--green70);
        border-radius: 4px;

        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
  }
</style>

<script lang="ts">
  import supabase from '../../lib/db';
  import {SvgKey, SvgLogo, SvgMail} from '../../utils/Icon';
  import Button from '../uis/Button.svelte';
  import {_} from 'svelte-i18n';
  import EditText from '../uis/EditText.svelte';
  import {onMount} from 'svelte';
  import {replace} from 'svelte-spa-router';
  import {user} from '../../stores/sessionStore';

  let loading = false;
  let email: string;
  let password: string;

  onMount(async () => {
    if ($user) await replace('/');
  });

  const onChangeEmail = (e: CustomEvent) => {
    email = e.detail;
  };

  const onChangePassword = (e: CustomEvent) => {
    password = e.detail;
  };

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

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleLogin = async () => {
    await handleAuthException(async () => {
      const {error} = await supabase.auth.signIn({email, password});

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      if (!error) replace('/');

      return error;
    });
  };

  const handleSignInWithGoogle = async () => {
    // await handleAuthException(async () => {
    //   const {error} = await supabase.auth.signUp({email, password});
    //   return error;
    // });
  };

  const handleSignInWithFacebook = async () => {
    // await handleAuthException(async () => {
    //   const {error} = await supabase.auth.signUp({email, password});
    //   return error;
    // });
  };
</script>

<main>
  <form>
    <SvgLogo />
    <h1 style="margin-bottom: 60px;">{$_('login')}</h1>
    <EditText
      containerStyle="width: 80%;"
      inputStyle="font-size: 14px;"
      type="email"
      placeholder={$_('SignIn.email_hint')}
      on:changed={onChangeEmail}
    >
      <SvgMail slot="leftElement" />
    </EditText>
    <EditText
      containerStyle="width: 80%; margin-top: 8px"
      inputStyle="font-size: 14px;"
      type="password"
      placeholder={$_('SignIn.pw_hint')}
      on:changed={onChangePassword}
    >
      <SvgKey slot="leftElement" />
    </EditText>
    <div class="container-options">
      <a class="link" href="/#/sign_up">{$_('SignIn.do_not_have_account')}?</a>
      <a class="link" href="/#/sign_up">{$_('SignIn.forgot_your_password')}?</a>
    </div>
    <Button
      on:click={handleLogin}
      primary
      style="font-size: 14px; align-self: stretch; margin: 40px 10% 0 10%"
      type="submit"
      disabled={loading}
    >
      <div class="text">{loading ? $_('loading') : $_('sign_in')}</div>
    </Button>
    <Button
      on:click={handleSignInWithGoogle}
      style="color: black; font-size: 14px; align-self: stretch; margin: 12px 10%;"
    >
      <div class="text">{$_('SignIn.sign_in_with_google')}</div>
    </Button>
    <Button
      on:click={handleSignInWithFacebook}
      style="color: black; font-size: 14px; align-self: stretch; margin: 0 10%;"
    >
      <div class="text">{$_('SignIn.sign_in_with_facebook')}</div>
    </Button>
    <a class="link" href="/#" style="margin-top: 8px;"
      >{$_('SignIn.look_around')}</a
    >
  </form>
</main>
