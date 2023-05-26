<template>
  <button class="btn btn-sm btn-primary text-center"> <router-link class="nav-link active" aria-current="page" to="/register">Register</router-link></button>
  <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col ">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.first_name }}</td>
      <td>{{user.last_name}}</td>
      <td>{{ user.gender }}</td>
      <td class="btn-route">
        <button class="btn btn-sm btn-danger" @click="deleteUser(user.id)">delete</button>
        <button class="btn btn-sm btn-primary text-center"><router-link :to="`/users/${user.id}`" class="show">see more</router-link></button>
        <button class="btn btn-sm btn-success text-center"><router-link :to="`/user/${user.id}/update`" class="show">update</router-link></button>
      </td>
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allusersApp",
  created() {
    this.getallusers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getallusers() {
      axios
        .get("  http://localhost:2000/users")
        .then((res) => {
          console.log(res.data);
          this.users = res.data
        })
        .catch((err) => console.log(err));
    },
    deleteUser(id){
        axios.delete(`http://localhost:2000/users/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.getallusers()
        })
        .catch((err)=>console.log(err))
    },
    storeUser(){
        axios.post(`http://localhost:2000/users/`)
        .then((res)=>{
            console.log(res.data)
            this.getallusers()
        })
        .catch((err)=>console.log(err))
    },
   
  }
};
</script>

<style scoped>
.show{
  text-decoration: none;
  color: white;
}
.btn-route{
  display: flex;
  justify-content: center;
 gap: 2rem;
}

</style>
