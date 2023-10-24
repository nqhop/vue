<template>
  <base-container v-if="user">
    <h2>{{ user.fullname }} : Projects</h2>
    
    <base-search v-if="hasProjects"/>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import { computed, watch } from "vue";
export default {
  props: ["userProps"],
  components: { ProjectItem },
  setup(props) {
    const user = computed(() => props.userProps);

    watch(user, (newValue) => {
      console.log("newValue: ", newValue);
    });

    const hasProjects = computed(()=>{
        return user.value.projects && user.value.projects.length > 0
    })
    return {
      user,
      hasProjects
    };
  },
};
</script>
