<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <div class="row">
      <button class="btn" @click="accountList">GET-/account/list</button>
    </div>
    <hr />
    <div class="row">
      <input type="text" v-model="emailAddress" />
      <button class="btn" @click="accountGet">GET-/account</button>
    </div>
    <hr />
    <div class="row">
      <input type="text" v-model="emailAddressPost" placeholder="email" />
      <input type="text" v-model="nickNamePost" placeholder="nickname" />
      <button class="btn" @click="accountPost">POST-/account</button>
    </div>
    <hr />
    <div class="row">
      <input type="text" v-model="accountNumberPut" placeholder="accountNumber" />
      <input type="text" v-model="emailAddressPut" placeholder="email" />
      <input type="text" v-model="nickNamePut" placeholder="nickname" />
      <button class="btn" @click="accountPut">PUT-/account</button>
    </div>
    <hr />
    <textarea v-model="responseJson" cols="120" rows="20"></textarea>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      emailAddress: '',

      emailAddressPost: '',
      nickNamePost: '',

      accountNumberPut: 0,
      emailAddressPut: '',
      nickNamePut: '',

      responseJson: ''
    }
  },
  props: {
    msg: String
  },
  created: function () {
    this.emailAddress = 'test01@test.com'

    this.emailAddressPost = 'test10@test.com'
    this.nickNamePost = 'nickName10'

    this.accountNumberPut = 2
    this.emailAddressPut = 'test02@test.com'
    this.nickNamePut = 'nickName02-update'
  },
  methods: {
    accountList: async function () {
      let apiResponse = await this.axiosGet(this, '/api/account/list')
      //this.responseJson = JSON.stringify(apiResponse).replace(/,/g, ",\n")
      this.responseJson = JSON.stringify(apiResponse)
    },
    accountGet: async function () {
      let apiResponse = await this.axiosGet(this, `/api/account?emailAddress=${this.emailAddress}`)
      //this.responseJson = JSON.stringify(apiResponse).replace(/,/g, ",\n")
      this.responseJson = JSON.stringify(apiResponse)
    },
    accountPost: async function () {
      let requestBody = {
        emailAddress: this.emailAddressPost,
        nickName: this.nickNamePost
      }
      let apiResponse = await this.axiosPost(this, `/api/account`, requestBody)
      //this.responseJson = JSON.stringify(apiResponse).replace(/,/g, ",\n")
      this.responseJson = JSON.stringify(apiResponse)
    },
    accountPut: async function () {
      let requestBody = {
        accountNumber: this.accountNumberPut,
        emailAddress: this.emailAddressPut,
        nickName: this.nickNamePut
      }
      let apiResponse = await this.axiosPut(this, `/api/account`, requestBody)
      //this.responseJson = JSON.stringify(apiResponse).replace(/,/g, ",\n")
      this.responseJson = JSON.stringify(apiResponse)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
