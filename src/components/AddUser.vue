<template>
  <div>
    <h2>Dodaj użytkownika</h2>
    <form @submit="addUser">
      <label>
        Imię:
        <input type="text" v-model="newUser.name" required>
      </label>
      <br>
      <label>
        ID pracownika:
        <input type="text" v-model="newUser.employee_id" required>
      </label>
      <br>
      <label>
        Email:
        <input type="email" v-model="newUser.email" required>
      </label>
      <br>
      <button type="submit">Dodaj</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddUser',
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        employee_id: ''
      }
    }
  },
  methods: {
    addUser() {
      // Walidacja wprowadzonych danych
      if (!this.newUser.name || !this.newUser.employee_id || !this.newUser.email) {
        console.error('Wprowadź wymagane dane');
        return;
      }

      axios.post('http://localhost:8000/api/clients', this.newUser)
        .then(() => {
          // Dodanie użytkownika do listy
          this.$router.push('/');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
