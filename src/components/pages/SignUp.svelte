<style lang="scss">
  main {
    .icon {
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }

    .btn-sign-up {
      height: 40px;
      margin-top: 40px;
      align-self: stretch;
      background-color: var(--green70);
      border-radius: 4px;

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
      padding: 60px;
      width: 60%;
      background: #ffffff;
      box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.08);
      border-radius: 16px;

      display: grid;
      grid-template-areas:
        'header header header '
        ' . . . '
        'label input input'
        'label input input'
        'label input input'
        'terms terms terms'
        ' . . . '
        'btn-sign btn-sign btn-sign';
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: stretch;

      .header {
        grid-area: header;
        margin-bottom: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .label {
        grid-area: label;

        display: grid;
        align-items: stretch;

        p {
          font-size: 14px;
          line-height: 260%;
          letter-spacing: -0.5px;
        }
      }

      .input {
        grid-area: input;
      }

      .terms {
        grid-area: terms;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .container {
          align-self: center;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            margin-left: 6px;
            font-style: normal;
            letter-spacing: -0.5px;
            font-weight: normal;
            font-size: 14px;
            line-height: 21px;

            display: flex;
            flex-direction: row;
            align-items: center;
          }
        }
      }

      .btn-sign {
        grid-area: btn-sign;

        display: flex;
        align-items: center;
        justify-content: center;

        input {
          flex: 1;
          height: 40px;
          margin-top: 40px;
          background-color: var(--green70);
          border-radius: 4px;

          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
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

  let loading = false;
  let checked = false;
  let email: string;
  let password: string;
  let passwordConfirm: string;

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

      if (error) throw error;
    } catch (error) {
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

<main>
  <form on:submit|preventDefault={handleSignUp}>
    <div class="header">
      <h1 style="align-self: center;">{$_('SignUp.title')}</h1>
    </div>
    <div class="label">
      <p style="height: 40px;">{$_('email')}</p>
      <p style="height: 40px;">{$_('pw')}</p>
      <p style="height: 40px;">{$_('SignUp.pw_confirm')}</p>
    </div>
    <div class="input">
      <EditText
        containerStyle="align-self: stretch;"
        inputStyle="font-size: 14px;"
        type="email"
        placeholder={$_('SignUp.email_hint')}
        on:changed={onChangeEmail}
      />
      <EditText
        containerStyle="align-self: stretch; margin-top: 8px"
        inputStyle="font-size: 14px;"
        type="password"
        placeholder={$_('SignUp.pw_hint')}
        on:changed={onChangePassword}
      />
      <EditText
        containerStyle="align-self: stretch; margin-top: 8px"
        inputStyle="font-size: 14px;"
        type="password"
        placeholder={$_('SignUp.pw_confirm_hint')}
        on:changed={onChangePasswordConfirm}
      />
    </div>
    <div class="terms">
      <div class="container icon" on:click={handleCheck}>
        <SvgCheck fill={checked ? '#0DB293' : 'none'} />
        <p>
          {@html $_('SignUp.terms_and_agreement')}
        </p>
      </div>
    </div>
    <div class="btn-sign">
      <input
        class="btn-sign-up"
        style="color: white; font-size: 14px;"
        type="submit"
        value={loading ? $_('loading') : $_('SignUp.title')}
        disabled={loading}
      />
    </div>
  </form>
</main>
