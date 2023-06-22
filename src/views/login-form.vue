<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <dx-form :form-data="formData" :disabled="loading">
      <dx-item
        data-field="email"
        editor-type="dxTextBox"
        :editor-options="{ stylingMode: 'filled', placeholder: 'Имя пользователя user', mode: 'text' }"
      >
          <dx-required-rule message="Введите имя пользователя"/>
          <dx-pattern-rule message="Неправильно введено имя пользователя" :pattern="this.loginPattern"/>
          <dx-label :visible="false"/>
      </dx-item>
      <dx-item
        data-field='password'
        editor-type='dxTextBox'
        :editor-options="{ stylingMode: 'filled', placeholder: 'Пароль user', mode: 'password' }"
      >
        <dx-required-rule message="Введите пароль"/>
        <dx-label :visible="false"/>
      </dx-item>
      <dx-item
        data-field="rememberMe"
        editor-type="dxCheckBox"
        :editor-options="{ text: '  Помнить пользователя', elementAttr: { class: 'form-text' } }"
      >
        <dx-label :visible="false"/>
      </dx-item>
      <dx-button-item>
        <dx-button-options
          width="100%"
          type="default"
          template="signInTemplate"
          :use-submit-behavior="true"
        >
        </dx-button-options>
      </dx-button-item>
      <dx-item>
        <template #default>
          <div class="link">
            <router-link to="/reset-password">Забыли пароль?</router-link>
          </div>
        </template>
      </dx-item>
      <template #signInTemplate>
        <div>
          <span class="dx-button-text">
            <dx-load-indicator v-if="loading" width="24px" height="24px" :visible="true"/>
            <span v-if="!loading">Вход</span>
          </span>
        </div>
      </template>
    </dx-form>
  </form>
</template>

<script>
import DxLoadIndicator from "devextreme-vue/load-indicator";
import DxForm, {
  DxItem,
  DxPatternRule,
  DxRequiredRule,
  DxLabel,
  DxButtonItem,
  DxButtonOptions
} from "devextreme-vue/form";
import notify from 'devextreme/ui/notify';

import auth from "../auth";

import {reactive, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const formData = reactive({
      email: "",
      password: ""
    });
    const loading = ref(false);


    async function onSubmit() {
      const {email, password} = formData;
      loading.value = true;
      const result = await auth.logIn(email, password);
      if (!result.isOk) {
        loading.value = false;
        notify(result.message, "error", 2000);
      } else {
        const path = route.query.redirect + `/${email}`;
        await router.push(path);
      }
    }

    return {
      formData,
      loading,
      onSubmit
    };
  },
  components: {
    DxLoadIndicator,
    DxForm,
    DxPatternRule,
    DxRequiredRule,
    DxItem,
    DxLabel,
    DxButtonItem,
    DxButtonOptions
  },
  data() {
    return {
      loginPattern: /^[0-9a-z]+$/
    }
  }
};
</script>

<style lang="scss">
@import "../themes/generated/variables.base.scss";

.login-form {
  .link {
    text-align: center;
    font-size: 16px;
    font-style: normal;

    a {
      text-decoration: none;
    }
  }

  .form-text {
    margin: 10px 0;
    color: rgba($base-text-color, alpha($base-text-color) * 0.7);
  }
}
</style>
