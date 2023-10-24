<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search @selectedValue="selectedUsers" />
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting == 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting == 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @listProjects="$emit('listProjects', $event)"
      />
    </ul>
  </base-container>
</template>

<script>
import UserItem from "./UserItem.vue";
import { ref, watch, computed } from "vue";
export default {
  components: {
    UserItem,
  },
  props: ["users"],
  setup(props) {
    const enteredSearchTerm = ref("");
    const sorting = ref(null);

    function selectedUsers(value) {
      enteredSearchTerm.value = value;
      console.log("selectedUsers", enteredSearchTerm.value);
    }

    function sort(value) {
      sorting.value = value;
    }

    const availableUsers = computed(() => {
      if (enteredSearchTerm.value) {
        let users = [];
        users = props.users.filter((urs) => {
          return urs.fullName.toLowerCase().includes(enteredSearchTerm.value);
        });
        // console.log("users", users);
        return users;
      } else {
        return props.users;
      }
    });

    const displayedUsers = computed(() => {
      if (!sorting.value) return availableUsers.value;
      return availableUsers.value.slice().sort((u1, u2) => {
        if (
          sorting.value == "asc" &&
          u1.fullName.toLowerCase() > u2.fullName.toLowerCase()
        ) {
          return 1;
        } else if (sorting.value == "asc") {
          return -1;
        } else if (u1.fullName.toLowerCase() > u2.fullName.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      });
    });

    watch(displayedUsers, function (newValue) {
      console.log("displayedUsers");
      console.log("new value:", newValue);
    });
    return {
      selectedUsers,
      enteredSearchTerm,
      availableUsers,
      sort,
      displayedUsers,
      sorting,
    };
  },

  mounted() {
    // console.log(typeof(this.users))
    // console.log(this.users[0].fullName.toLowerCase())
    // console.log(this.users.filter(() => {
    //       return true
    //     }));
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
