<template>
  <!--  TODO FAB Menu :: Add getting parameters for dynamic link creation-->
  <div class="fab-container">
    <div class="fab-menu" :class="{open: openMenu}">
      <button type="button" class="fab-menu-btn -green">Empty</button>

      <router-link to="/form" class="fab-menu-btn -indigo">Form</router-link>
      <router-link to="/home" class="fab-menu-btn -indigo">Home</router-link>
    </div>
    <button @click="openMenu = !openMenu" type="button" class="fab-menu-btn -red main">+</button>
  </div>
</template>

<script>
export default {
  name: "AppFabMenu",
  data() {
    return {
      openMenu: false
    }
  },
}
</script>

<style scoped lang="scss">
.fab-menu-btn {
  display: flex;
  align-items: center;

  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 7px;
  color: white;
  width: 46px;
  height: 46px;
  border-radius: 100%;
  box-shadow: 0 11px 20px -3px rgb(58 54 60 / 35%);
  margin-bottom: 10px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 11px 20px -3px rgb(58 54 60 / 50%);
  }

  &:active {
    opacity: 0.9;
  }

  &.main {
    font-weight: 700;
    font-size: 20px;
  }

  &.-red {
    background-color: #EF5350;

    &:hover {
      background-color: #F44336;
    }
  }

  &.-indigo {
    width: 56px;
    height: 56px;
    background-color: #5C6BC0;

    &:hover {
      background-color: #3F51B5;
    }
  }

  &.-green {
    width: 56px;
    height: 56px;
    background-color: #66BB6A;

    &:hover {
      background-color: #4CAF50;
    }
  }
}

.fab-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.fab-menu {
  position: absolute;
  visibility: hidden;
  text-align: center;
  opacity: 0;
  transform: scale(0.25);
  transform-origin: 50% 100%;
  transition: all 0.3s;
  bottom: 70px;

  &.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
}
</style>
