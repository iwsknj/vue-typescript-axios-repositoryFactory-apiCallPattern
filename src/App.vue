<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div>
      <h2>Post</h2>
      <input type="text" placeholder="code" v-model="postVal.code" />
      <input type="text" placeholder="name" v-model="postVal.name" />
      <button @click="post">Post</button>
      <p>message: {{ postMessage }}</p>
    </div>
    <div>
      <h2>Put</h2>
      <input type="text" placeholder="code" v-model="putVal.code" />
      <input type="text" placeholder="name" v-model="putVal.name" />
      <button @click="put">Put</button>
      <p>message: {{ putMessage }}</p>
    </div>
    <div>
      <h2>GetAll</h2>
      <ul>
        <div v-for="(ctry, index) in countries" :key="index">
          <li>code: {{ ctry.Code }}</li>
          <li>name: {{ ctry.Name }}</li>
        </div>
      </ul>
      <button @click="getAll">GetALL</button>
    </div>
    <div>
      <h2>Get</h2>
      <input type="text" v-model="getCode" placeholder="enter the code" />
      <button @click="get">Get</button>
      <p>code: {{ country.Code }}</p>
      <p>name: {{ country.Name }}</p>
      <p>message: {{ getMessage }}</p>
    </div>
    <div>
      <h2>Delete</h2>
      <input type="text" v-model="delCode" placeholder="enter the code" />
      <button @click="del">Delete</button>
      <p>message: {{ deleteMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RepositoryFactory from '@/repositories/RepositoryFactory';

// const CountriesRepository = RepositoryFactory.get('countries');
const CountriesRepository = RepositoryFactory.countries;

interface Country {
  code: string;
  name: string;
}

@Component
export default class App extends Vue {
  // data
  delCode: string = '';

  getCode: string = '';

  postVal: Country = { code: '', name: '' };

  putVal: Country = { code: '', name: '' };

  countries: Country[] = [];

  country: Country = { code: '', name: '' };

  initVal: Country = { code: '', name: '' };

  postMessage: string = '';

  putMessage: string = '';

  deleteMessage: string = '';

  getMessage: string = '';

  // method
  // eslint-disable-next-line class-methods-use-this
  async getAll() {
    console.log('getall');
    try {
      const response = await CountriesRepository.getAll();
      this.countries = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  public async get() {
    this.getMessage = '';

    try {
      const response = await CountriesRepository.get(this.getCode);
      this.country = response.data;
      this.getCode = '';
    } catch (e) {
      this.getMessage = e;
    }
  }

  public async post() {
    try {
      await CountriesRepository.post(this.postVal);
      Object.assign(this.postVal, this.initVal);
    } catch (e) {
      this.postMessage = e;
    }
  }

  public async put() {
    this.putMessage = '';
    try {
      await CountriesRepository.post(this.putVal);
      Object.assign(this.putVal, this.initVal);
    } catch (e) {
      this.putMessage = e;
    }
  }

  public async del() {
    try {
      await CountriesRepository.delete(this.delCode);
      this.delCode = '';
    } catch (e) {
      this.deleteMessage = e;
    }
  }

  /* eslint-disable class-methods-use-this */
  created() {
    console.log(CountriesRepository);
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
