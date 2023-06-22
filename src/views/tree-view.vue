<template>
  <div>
    <div id="modal" class="background-mod">
      <div class="modal">
        <div class="modal_container">
          <button class="btn-close" @click="cancelEdit">х</button>
          <input :value="edit" class="edit-name"/>
          <div><button class="btn-save">Сохранить</button></div>
        </div>
      </div>
    </div>

    <div v-for="item in menuItems" :key="item.id">
      <div class="m-group-h">{{ item.text }}</div>
      <div v-for="field in item.items" :key="field.id">
        <div v-if="field.id !== '1_4'">
          <div
              :id="field.id"
              class="s-group"
              @click="selectGroup(field)"
          >
            <div class="s-group-h" @dblclick="editName(field.text, field)">{{ field.text }}</div>
            <div class="s-group-body">
              <div class="s-group-item">
                <div
                    v-for="row in field.rows" :id="row.id"
                    :key="row.id"
                    @click="selectRow(row)"
                >
          <span
              v-for="r in row.row" :key="r.id"
              class="s-item-h" :style="{width: getElWidth(row.row)}"
              @dblclick="editName(r, row.row)"
          >
          <button class="btn-x">x</button>
          {{ r }}
        </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>

          <div class="m-group-h">{{ field.text }}</div>
          <div v-for="group in field.items" :key="group.id">
            <div
                :id="group.id"
                class="s-group"
                @click="selectGroup(group)"
            >
              <div class="s-group-h" @dblclick="editName(group.text, group)">{{ group.text }}</div>
              <div class="s-group-body">
                <div class="s-group-item">
                  <div
                      v-for="row in group.rows" :id="row.id"
                      :key="row.id"
                      @click="selectRow(row)"
                  >
          <span
              v-for="r in row.row" :key="r.id"
              class="s-item-h" :style="{width: getElWidth(row.row)}"
              @dblclick="editName(r, row.row)"
          >
          <button class="btn-x">x</button>
          {{ r }}
        </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name: "TreeView",
  components: {

  },
  props: {
    menuItems: Array
  },
  data() {
    return {
      selectedGroup: null,
      selectedRow: null,
      modalVisible: false,
      edit: '',
    }
  },
  methods: {
    getElWidth(row) {
      let width
      if (row.length === 1) width = 99 + '%'
      else if (row.length === 2) width = 97.8 / row.length + '%'
      else if (row.length === 3) width = 96.8 / row.length + '%'
      else width = 95.8 / row.length + '%'
      return width
    },
    selectGroup(group) {
      if (this.selectedGroup !== null) {
        document.getElementById(this.selectedGroup.id).style.borderWidth = ''
      }

      this.selectedGroup = {...group}
      document.getElementById(group.id).style.borderWidth = '3px'
      console.log(this.selectedGroup.text)
    },
    selectRow(row) {
      if (this.selectedRow !== null) {
        document.getElementById(this.selectedRow.id).style.border = ''
      }

      this.selectedRow = {...row}
      document.getElementById(row.id).style.border = '1px dashed #db4545'
      document.getElementById(row.id).style.borderRadius = '5px'
      console.log(this.selectedRow)
    },
    editName(name, list) {
      this.edit = name
      document.getElementById('modal').style.display = 'inline'
      console.log(this.edit + ' ' + list)

      //console.log(this.popupVisible)
    },
    cancelEdit() {
      document.getElementById('modal').style.display = 'none'
    }
  }
}
</script>

<style lang="scss">
.background-mod {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: rgba(44, 62, 80, 0.44);
}

.modal {
  position: absolute;
  left: 45%;
  top: 45%;
  margin-left: -100px;
  margin-top: -75px;
}

.modal_container {
  background-color: #fff;
  border-radius: 8px;
  width: 300px;
  height: 150px;
}

.edit-name {
  margin: 5% 20%;
}

.btn-close {
  background-color: rgba(0,0,0,0);
  border: none;
  font-size: 18px;
  margin-left: 92%;
}

.btn-save {
  margin: 10% 65%;
  padding: 10px;
  background-color: rgba(68, 85, 102, 0.8274509804);
  color: white;
  border: none;
  border-radius: 5px;
}

.s-group {
  margin: 22px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  width: 92%;
  height: fit-content;
  border-color: rgba(68, 85, 102, 0.8274509804);
}

.s-group-h {
  background-color: #7a8ea1;
  margin-top: -22px;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  color: white;
  width: fit-content;
  height: 27px;
}

.m-group-h {
  background-color: #576a7c;
  margin-top: 5px;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  color: white;
  width: fit-content;
  height: 27px;
}

.s-group-body {
  .s-group-item {
    padding-top: 5px;
  }
}

.s-item-h {
  display: inline-block;
  background-color: rgba(243, 242, 242, 0.79);
  white-space: nowrap;
  padding: 2px 15px 2px 5px;
  border: 1px solid rgba(68, 85, 102, 0.8274509804);
  border-radius: 5px;
  margin: 5px;
  color: #576a7c;
}

.btn-x {
  border: none;
  color: #576a7c;
  background-color: rgba(0, 0, 0, 0);
}

</style>