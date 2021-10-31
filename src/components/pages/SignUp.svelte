<style lang="postcss">
  .container {
    .icon {
      &:hover {
        cursor: pointer;
      }
    }

    background: linear-gradient(
      136.71deg,
      var(--auth-background-light) 21.32%,
      var(--auth-background-dark) 96.51%
    );

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
      padding: 60px;
      width: 60%;
      background-color: var(--background);
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      border-radius: 16px;
      max-height: 488px;
      max-width: 640px;
      align-self: center;

      @media (--mobile) {
        max-height: none;
        border-radius: 0;
        padding: 80px 24px;

        flex: 1;
      }

      display: grid;
      grid-template-areas:
        ' . . . '
        'header header header '
        ' . . . '
        'input input input'
        'input input input'
        'input input input'
        'terms terms terms'
        ' . . . '
        'btn-sign btn-sign btn-sign'
        ' . . . ';
      justify-content: stretch;

      @media (--mobile) {
        grid-template-columns: none;
        grid-template-rows: min-content;
        align-content: stretch;
      }

      .header {
        grid-area: header;
        margin-bottom: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .input {
        grid-area: input;
      }

      .input-container {
        display: flex;
        flex-direction: row;

        .label {
          width: 160px;
        }
      }

      .terms {
        grid-area: terms;
        margin: 8px 0;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .icon {
          align-self: center;

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          margin-left: 2px;
          font-style: normal;
          letter-spacing: -0.5px;
          font-weight: normal;

          display: flex;
          flex-wrap: wrap;
        }
      }

      .btn-sign {
        grid-area: btn-sign;

        display: flex;
        align-items: center;
        justify-content: center;

        :global(.btn-sign-up) {
          flex: 1;
          height: 40px;
          margin-top: 40px;
          color: white;
          font-size: 14px;
        }
      }
    }
  }
</style>

<script lang="ts">
  import supabase from '../../lib/db';
  import {_} from 'svelte-i18n';
  import EditText from '../uis/EditText.svelte';
  import {SvgCheck} from '../../utils/Icon';
  import {onMount} from 'svelte';
  import {user} from '../../stores/sessionStore';
  import {replace} from 'svelte-spa-router';
  import Button from '../uis/Button.svelte';

  let loading = false;
  let checked = false;
  let email: string;
  let password: string;
  let passwordConfirm: string;

  onMount(async () => {
    if ($user) {await replace('/');}
  });

  const onChangeEmail = (e: CustomEvent) => {
    email = e.detail;
  };

  const onChangePassword = (e: CustomEvent) => {
    password = e.detail;
  };

  const onChangePasswordConfirm = (e: CustomEvent) => {
    passwordConfirm = e.detail;
  };

  const handleCheck = () => {
    checked = !checked;
  };

  const handleAuthException = async (callback: () => Promise<Error | null>) => {
    try {
      loading = true;
      const error = await callback();

      if (error) {throw error;}
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleSignUp = async () => {
    if (!email || !password || !passwordConfirm || !checked) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      alert($_('SignUp.missing_inputs'));

      return;
    }

    await handleAuthException(async () => {
      const {error} = await supabase.auth.signUp({email, password});

      return error;
    });
  };
</script>

<div class="container">
  <form>
    <div class="header">
      <h1 style="align-self: center;">{$_('SignUp.title')}</h1>
    </div>
    <div class="input">
      <div class="input-container">
        <p class="label" style="height: 40px;">{$_('email')}</p>
        <EditText
          containerStyle="flex: 1; align-self: stretch;"
          inputStyle="font-size: 14px;"
          type="email"
          placeholder={$_('SignUp.email_hint')}
          on:changed={onChangeEmail}
        />
      </div>
      <div class="input-container">
        <p class="label" style="height: 40px;">{$_('pw')}</p>
        <EditText
          containerStyle="flex: 1; align-self: stretch; margin-top: 8px"
          inputStyle="font-size: 14px;"
          type="password"
          placeholder={$_('SignUp.pw_hint')}
          on:changed={onChangePassword}
        />
      </div>
      <div class="input-container">
        <p class="label" style="height: 40px;">{$_('SignUp.pw_confirm')}</p>
        <EditText
          containerStyle="flex: 1; align-self: stretch; margin-top: 8px"
          inputStyle="font-size: 14px;"
          type="password"
          placeholder={$_('SignUp.pw_confirm_hint')}
          on:changed={onChangePasswordConfirm}
        />
      </div>
    </div>
    <div class="terms">
      <div class="icon" on:click={handleCheck}>
        <SvgCheck width={34} fill={checked ? '#0DB293' : 'none'} />
      </div>
      <div class="body3 content">
        {@html $_('SignUp.terms_and_agreement')}
      </div>
    </div>
    <div class="btn-sign">
      <Button
        on:click={handleSignUp}
        primary
        class="btn-sign-up"
        type="submit"
        disabled={loading}
      >
        <div class="text">{loading ? $_('loading') : $_('SignUp.title')}</div>
      </Button>
    </div>
  </form>
</div>
