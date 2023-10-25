<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }} : Projects</h2>

    <div v-if="hasProjects">
      <base-search @selectedValue="selectedProjects" />
      <ul>
        <project-item
          v-for="project in availableProjects"
          :key="project.id"
          :title="project.title"
        />
      </ul>
    </div>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import { computed, watch, ref } from "vue";
import BaseSearch from "../UI/BaseSearch.vue";
export default {
  props: ["userProps"],
  components: { ProjectItem, BaseSearch },
  setup(props) {
    const user = computed(() => props.userProps);
    const enteredSearchTerm = ref("");

    function selectedProjects(value) {
      enteredSearchTerm.value = value.toLowerCase();
    }

    const availableProjects = computed(() => {
      if (enteredSearchTerm.value) {
        return props.userProps.projects.filter((project) => {
          return project.title.toLowerCase().includes(enteredSearchTerm.value);
        });
      }
      return props.userProps.projects;
    });

    watch(user, (newValue) => {
      console.log("newValue: ", newValue);
    });

    const hasProjects = computed(() => {
      return user.value.projects && user.value.projects.length > 0;
    });

    return {
      user,
      hasProjects,
      selectedProjects,
      availableProjects,
    };
  },
  computed() {
    console.log(this.user);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
