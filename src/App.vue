<template>
<manager-tasks/>
</template>

<script>
import ManagerTasks from './components/ManagerTasks.vue';


export default {
  name: "App",
  components: {
    ManagerTasks
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
