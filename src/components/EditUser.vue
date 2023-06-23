<template>
  <div>
    <h2>Edytuj użytkownika</h2>
    <form @submit="updateUser" v-if="editingUser">
      <label>
        Imię:
        <input type="text" v-model="editingUser.name" required>
      </label>
      <br>
      <label>
        ID pracownika:
        <input type="text" v-model="editingUser.employee_id" required>
      </label>
      <br>
      <label>
        Email:
        <input type="email" v-model="editingUser.email" required>
      </label>
      <br>
      <button type="submit">Zapisz</button>
      <button @click="cancelEdit">Anuluj</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditUser',
  data() {
    return {
      editingUser: null
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const userId = this.$route.params.id;
      axios
        .get(`http://localhost:8000/api/clients/${userId}/info`)
        .then((response) => {
          this.editingUser = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateUser() {
      // Walidacja wprowadzonych danych
      if (
        !this.editingUser ||
        !this.editingUser.name ||
        !this.editingUser.employee_id ||
        !this.editingUser.email
      ) {
        console.error('Wprowadź wymagane dane');
        return;
      }

      axios
        .put(`http://localhost:8000/api/clients/${this.editingUser.id}`, this.editingUser)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    cancelEdit() {
      this.$router.push('/');
    }
  }
};
</script>
