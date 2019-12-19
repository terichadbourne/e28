<template>
  <div id='person-create'>
    <h1>Add Feedback</h1>
    <form @submit.prevent='handleSubmit'>
      <div class='form-group'>
        <label for='name'>Name</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.person.name.$error }'
          data-test='person-name-input'
          id='name'
          v-model='$v.person.name.$model'
        />
        <div v-if='$v.person.name.$error'>
          <div class='form-feedback-error' v-if='!$v.person.name.required'>Name is required.</div>
        </div>
      </div>

      <div class='form-group'>
        <label for='rant'>Rant</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.person.rant.$error }'
          data-test='person-rant-input'
          id='rant'
          v-model='$v.person.rant.$model'
        />
        <div v-if='$v.person.rant.$error'>
          <div class='form-feedback-error' v-if='!$v.person.rant.required'>Rant is required.</div>
        </div>
      </div>

      <div class='form-group'>
        <label for='rave'>Rave</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.person.rave.$error }'
          data-test='person-rave-input'
          id='rave'
          v-model='$v.person.rave.$model'
        />
        <div v-if='$v.person.rave.$error'>
          <div class='form-feedback-error' v-if='!$v.person.rave.required'>Rave is required.</div>
        </div>
      </div>

      <button data-test='add-person-button' type='submit'>Add Feedback</button>

      <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
    </form>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { required } from 'vuelidate/lib/validators';
let person = {};
// If in dev mode, we'll pre-fill the person to make demo/testing easier
if (process.env.NODE_ENV == 'development') {
  person = {
    name: 'Joe Schmoe',
    rant: 'I hate this job so much!',
    rave: "This is the best company I've ever worked at!"
  };
} else {
  person = {
    name: '',
    rant: '',
    rave: ''
  };
}
export default {
  name: 'CreatePerson',
  data: function() {
    return {
      people: null,
      person: person,
      formHasErrors: false
    };
  },
  validations: {
    person: {
      name: {
        required
      },
      rant: {
        required
      },
      rave: {
        required
      }
    }
  },
  watch: {
    '$v.$anyError': function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    nextId: function() {
      // create a unique id one higher than the highest that currently exists
      let ids = [];
      this.people.forEach(person => {
        ids.push(person.id);
      });
      ids.sort();
      return parseInt(ids[ids.length - 1]) + 1;
    },
    handleSubmit: function() {
      if (!this.formHasErrors) {
        this.person.id = this.nextId();
        // Axios request to the server to persist the new person
        app.axios
          .post(app.config.api + 'people.json', this.person)
          .then(response => {
            console.log(response);
            // let key = response.data.name;
            // this.$store.commit('addPerson', {
            //   [key]: this.person
            // });
            this.$router.push({
              name: 'people'
            });
          });
      }
    }
  },
  mounted() {
    app.axios.get(app.config.api + 'people.json').then(response => {
      this.people = response.data.slice(1);
    });
  }
};
</script>

<style scoped>
#description {
  height: 150px;
}
</style>