<template lang="">
  <div  class="myTable">
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
      <tr v-for="user in filterUsers" :key="user.name">
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.role }}</td>
        <button @click="deleteUser(user)" class="delete">X</button>
      </tr>
    </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "UserComponent",
  inject: ["roles"],
  computed: {
    filterUsers() {
      if (!this.roles) {
        return [];
      }
      return this.roles.filter((user) => user.role === "user");
    },
  },
  methods: {
    deleteUser(user) {
      const index = this.roles.findIndex((a) => a.name === user.name);
      if (index !== -1) {
        this.roles.splice(index, 1);
      }
    },
  },
};
</script>
<style>
.delete{
    background-color: white;
    color: red;
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
}
.delete:hover{
    background-color: red;
    color: white;
}
.myTable{

  width: 50%;
  margin:50px auto !important;
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
