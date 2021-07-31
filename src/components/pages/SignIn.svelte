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

      a {
        margin-top: 8px;
        align-self: flex-end;
        margin-right: 10%;
        text-decoration: underline;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: var(--link);

        display: flex;
        align-items: center;
        text-align: right;
        letter-spacing: -0.5px;
        text-decoration-line: underline;
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

  let loading = false;
  let email: string;
  let password: string;

  const onChangeEmail = (e: CustomEvent) => { email = e.detail; };
  const onChangePassword = (e: CustomEvent) => { password = e.detail; };

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
    console.log('email', email);
    // await handleAuthException(async () => {
    //   const {error} = await supabase.auth.signIn({email, password});

    //   return error;
    // });
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
    <h1 style="margin-bottom: 60px;">{$_('SignIn.login')}</h1>
    <EditText
      containerStyle="width: 80%;"
      inputStyle="font-size: 14px;"
      type="email"
      placeholder={$_('SignIn.email_hint')}
      on:changed={onChangeEmail}
    >
      <SvgMail slot="leftElement"/>
    </EditText>
    <EditText
      containerStyle="width: 80%; margin-top: 8px"
      inputStyle="font-size: 14px;"
      type="password"
      placeholder={$_('SignIn.pw_hint')}
      on:changed={onChangePassword}
    >
      <SvgKey slot="leftElement"/>
    </EditText>
    <a href="/#/sign_up">{$_('SignIn.forgot_your_password')}?</a>
    <input
      type="submit"
      value={loading ? $_('loading') : $_('SignIn.sign_in')}
      disabled={loading}
    />
    <Button on:click={handleSignUp}>Sign Up</Button>
  </form>
</main>
