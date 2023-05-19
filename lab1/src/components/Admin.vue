<template lang="">
  <div class="myTable">
    <table class="container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="admin in filterAdmins" :key="admin.name">
          <td>{{ admin.name }}</td>
          <td>{{ admin.age }}</td>
          <td>{{ admin.role }}</td>
          <button @click="deleteAdmin(admin)" class="delete">Delete</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "AdminComponent",
  inject: ["roles"],
  computed: {
    filterAdmins() {
      if (!this.roles) {
        return [];
      }
      return this.roles.filter((admin) => admin.role === "admin");
    },
  },
  methods: {
    deleteAdmin(admin) {
      const index = this.roles.findIndex((a) => a.name === admin.name);
      if (index !== -1) {
        this.roles.splice(index, 1);
      }
    },
  },
};
</script>
<style >
.myTable{
  width: 50%;
  margin: auto;
}
table{
  margin: auto;
  width: 50%;
  text-align: center;
}

tr, th, td{
  border: 1px solid black;
}


</style>
