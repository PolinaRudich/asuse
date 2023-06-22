<template>
  <div>
    <div v-if="!checking" class="upl-content">
      <div class="upl-header">Укажите папку с пакетом документов</div>
      <div class="upl-container">
        <DxFileUploader
            accept="*"
            :multiple="true"
            upload-mode="instantly"
            @value-changed="e => files = e.value"
        />
      </div>
      <button
          class="upl-ok-btn"
          :disabled="files.length === 0"
          @click="onAddFolder"
      >
        OK
      </button>
    </div>
    <div v-if="checking1" class="upl-content">
      <div class="upl-header">Обработка документов</div>
      <div class="upl-indicator">
        <DxLoadIndicator
            id="large-indicator"
            :height="60"
            :width="60"
        />
      </div>
    </div>
    <div v-if="checking2" class="upl-content">
      <div class="upl-header">Проверка реквизитов на сервере ФНС</div>
      <div class="upl-indicator">
        <DxLoadIndicator
            id="large-indicator"
            :height="60"
            :width="60"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {DxFileUploader} from "devextreme-vue";
import {DxLoadIndicator} from "devextreme-vue"
import {useRoute, useRouter} from "vue-router";

export default {
  name: "AddFolderLayout",
  components: {
    DxFileUploader,
    DxLoadIndicator
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    function openContract() {
      router.push(
          {
            path: "/contract-card-view/1004460701",
            query: {redirect: route.path}
          }
      );
    }

    return {openContract}
  },
  data() {
    return {
      files: [],
      checking: false,
      checking1: false,
      checking2: false,
    }
  },
  methods: {
    onAddFolder() {
      this.checking = true
      this.checking1 = true
      setTimeout(() => {
        this.checking1 = false
        this.checking2 = true
        setTimeout(() => {
          this.checking2 = false
          this.checking = false
          this.openContract()
        }, 3000)
      }, 3000)
    },

  }
}
</script>

<style scoped>
.upl-content {
  position: absolute;
  top: 30%;
  left: 32%;
  border: 1px solid #b6b6b6;
  border-radius: 4px;
  padding: 2%;
  width: 27%;
  height: 35%;

  #large-indicator {
    vertical-align: middle;
    margin-right: 10px;
  }

  .upl-indicator {
    margin-top: 30%;
    margin-left: 40%;
  }

  .upl-container {
    margin-left: 5%;
    overflow-y: auto;
    height: 50%;
    width: 90%;
  }

  .upl-header {
    font-size: 18px;
    margin-top: 5%;
    margin-bottom: 5%;
    color: #445566;
    font-weight: bold;
    margin-left: 12%;
  }

  .upl-ok-btn {
    background-color: #ff7819;
    margin-left: 40%;
    margin-top: 7%;
    padding: 5px 30px;
    color: white;
  }

  .upl-ok-btn:hover {
     background-color: #ff4f19;
   }

  .upl-ok-btn:disabled {
    background-color: rgba(255, 120, 25, 0.49);
    color: rgba(255, 255, 255, 0.76);
  }
}

</style>