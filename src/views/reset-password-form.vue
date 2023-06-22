<template>
  <form
class="reset-password-form"
@submit.prevent="onSubmit"
>
    <dx-form>
      <dx-item>
        <template #default>
          <div class="content-text">
            Для восстановления пароля обратитесь к системному администратору.
          </div>
        </template>
      </dx-item>
      <dx-item>
        <template #default>
          <div class="login-link">
            Вернутся к
            <router-link to="/login-form">
входу
</router-link>
          </div>
        </template>
      </dx-item>
    </dx-form>
  </form>
</template>

<script>
import DxForm, { DxItem } from "devextreme-vue/form";


export default {
    components: {
        DxForm,
        DxItem
    },

    setup () {


        async function onSubmit () {

        }

        return {
            onSubmit
        };
    }
};
</script>

<style lang="scss">
@import "../themes/generated/variables.base.scss";
.dx-scrollview-content{

}
.reset-password-form {
  .content-text{
    font-size: 12px;
  }
  .login-link {
    font-size: 14px;
    text-align: left;
  }
}
</style>
