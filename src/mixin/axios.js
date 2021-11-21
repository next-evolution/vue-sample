export default {
  methods: {
    axiosGet: async function (component, apiUri) {
      // axios
      let responseData = null
      await this.axios
        .get(apiUri)
        .then(function (response) {
          console.log(`----- response - ${apiUri} -----`)
          console.log(response)
          responseData = response.data
        })
        .catch(function (error) {
          console.log(`----- error - ${apiUri} -----`)
          console.log(error)
          console.log(`----- error.response - ${apiUri} -----`)
          console.log(error.response)
          if (
            error.response != undefined
            && error.response.data != undefined
          ) {
            responseData = error.response.data
          } else {
            responseData = null
          }
        })

      return responseData
    },
    axiosPost: async function (component, apiUri, requestBody, contentType = null) {
      // request header
      let requestHeader = {}

      requestHeader['Content-Type'] = 'application/json'
      if (contentType != null) {
        requestHeader['Content-Type'] = contentType
      }
      // axios
      let responseData = null
      await this.axios
        .post(apiUri, requestBody, { headers: requestHeader })
        .then(function (response) {
          console.log(`----- response.data - ${apiUri} ----- `)
          console.log(response.data)
          responseData = response.data
        })
        .catch(function (error) {
          console.log(`----- error - ${apiUri} ----- `)
          console.log(error)
          console.log(`----- error.response - ${apiUri} ----- `)
          console.log(error.response)
          if (
            error.response != undefined
            && error.response.data != undefined
          ) {
            responseData = error.response.data
          } else {
            responseData = null
          }
        })

      return responseData
    },
    axiosPut: async function (component, apiUri, requestBody, contentType = null) {
      // request header
      let requestHeader = {}

      requestHeader['Content-Type'] = 'application/json'
      if (contentType != null) {
        requestHeader['Content-Type'] = contentType
      }
      // axios
      let responseData = null
      await this.axios
        .put(apiUri, requestBody, { headers: requestHeader })
        .then(function (response) {
          console.log(`----- response.data - ${apiUri} ----- `)
          console.log(response.data)
          responseData = response.data
        })
        .catch(function (error) {
          console.log(`----- error - ${apiUri} ----- `)
          console.log(error)
          console.log(`----- error.response - ${apiUri} ----- `)
          console.log(error.response)
          if (
            error.response != undefined
            && error.response.data != undefined
          ) {
            responseData = error.response.data
          } else {
            responseData = null
          }
        })

      return responseData
    }
  }
}
