<template>
  <div>
    <h1>Lista użytkowników</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }} {{ user.name }} {{ user.email }}
        <button @click="editUser(user)">Edytuj</button>
        <button @click="deleteUser(user.id)">Usuń</button>
      </li>
    </ul>
    <button @click="addUser">Dodaj</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get('http://localhost:8000/api/clients/all')
        .then((response) => {
          this.users = response.data.client.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email
          }));
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editUser(user) {
      // Przekierowanie do strony edycji użytkownika
      this.$router.push(`/edit/${user.id}`);
    },
    addUser() {
      // Przekierowanie do strony dodawania użytkownika
      this.$router.push('/add');
    },
    deleteUser(id) {
      axios
        .delete(`http://localhost:8000/api/clients/${id}`)
        .then(() => {
          this.users = this.users.filter((user) => user.id !== id);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
};
</script>
