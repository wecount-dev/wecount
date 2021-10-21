<style lang="postcss">
  :global(.social-button) {
    font-size: 14px;
    align-self: stretch;
    background-color: var(--paper) !important;
  }

  .container {
    background: linear-gradient(136.71deg, #17b87c 21.32%, #01886f 96.51%);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    display: flex;
    align-items: center;
    justify-content: center;

    .link {
      font-size: 14px;
      text-decoration: underline;
      color: var(--link);

      display: flex;
      align-items: center;
    }

    form {
      padding: 60px 70px;
      width: 60%;
      height: 654px;
      background-color: var(--background);
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      border-radius: 16px;
      max-height: 654px;
      max-width: 640px;
      align-self: center;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (--mobile) {
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
    }
  }
</style>

<script lang="ts">
  import supabase from '../../lib/db';
  import {SvgKey, SvgLogo, SvgMail} from '../../utils/Icon';
  import Button from '../uis/Button.svelte';
  import {_} from 'svelte-i18n';
  import EditText from '../uis/EditText.svelte';
  import {replace} from 'svelte-spa-router';
  import {user} from '../../stores/sessionStore';
  import {onMount} from 'svelte';

  user.subscribe((isLoggedIn) => {
    if (isLoggedIn) replace('/').catch((err) => console.log(err));
  });

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

  const handleLogin = async () => {
    try {
      loading = true;
      const {user, session, error} = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      loading = true;
      const {user, session, error} = await supabase.auth.signIn({
        provider: 'facebook',
      });

      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  };
</script>

<div class="container">
  <form>
    <SvgLogo />
    <h1 style="margin-bottom: 60px;">{$_('login')}</h1>
    <EditText
      containerStyle="width: 80%; margin-bottom: 8px"
      inputStyle="font-size: 14px;"
      type="email"
      placeholder={$_('SignIn.email_hint')}
      on:changed={onChangeEmail}
    >
      <SvgMail slot="leftElement" style="margin: 0 16px;" />
    </EditText>
    <EditText
      containerStyle="width: 80%;"
      inputStyle="font-size: 14px;"
      type="password"
      placeholder={$_('SignIn.pw_hint')}
      on:changed={onChangePassword}
    >
      <SvgKey slot="leftElement" style="margin: 0 16px;" />
    </EditText>
    <div class="container-options">
      <a class="link" href="/#/sign_up">{$_('SignIn.do_not_have_account')}?</a>
      <a class="link" href="/#/sign_up">{$_('SignIn.forgot_your_password')}?</a>
    </div>
    <Button
      on:click={handleLogin}
      primary
      style="font-size: 14px; align-self: stretch; margin: 40px 10% 10px 10%"
      disabled={loading}
      loading={loading}
    >
      <div class="text" style="color: white;">
        {$_('sign_in')}
      </div>
    </Button>
    <Button
      on:click={handleSignInWithFacebook}
      style="margin: 0 10%;"
      class="social-button"
    >
      <div class="text" style="font-weight: 500;">
        {$_('SignIn.sign_in_with_facebook')}
      </div>
    </Button>
    <a
      class="link"
      href="/#"
      style="
        margin-top: 14px;
        text-decoration: underline !important;
      "
    >
      {$_('SignIn.look_around')}
    </a>
  </form>
</div>
