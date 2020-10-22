<template>
  <form>
    <div class="wrapper">
        <h3 class='subtitle'>URL Encoder</h3>
          <div class="control">
            <input class="input" type="text" v-model="url">
            <button class="button-is-success" v-on:click="shortUrl">Encode</button>
          </div> 
          <br>
        <a v-if="short" :href="short" v-on:click="redirectUrl">{{short}}</a> 
    </div>
  </form>  
</template>

<script>
  export default {
    data: () => ({ 
      url: "",
      short: "",
      allUrl: "",
    }),
    methods: {
      shortUrl: function () {
        if(this.url === "") {
          console.log("error")
        } else {
          console.log(this.url)

          const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Headers": "all"},
          body: JSON.stringify({ url: this.url })
        };

        fetch('http://localhost:3000/show-url', requestOptions)
        .then(response => response.json())
        .then(data => (this.short = data.shortUrl));

       
        console.log(this.short)
        }
      },
      redirectUrl: function () {
        let url;
        this.allUrl.forEach(e => {
          if(e.urlencoded == this.short) {
            url = e.url;
          }
        })
        window.location.replace(url);
      }
    },
    mounted(){
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json"}
        };

        fetch('http://localhost:3000/short-url', requestOptions)
        .then(response => response.json())
        .then(data => (this.result = data.allUrl));
    }
  }
</script>
  
<style scoped>
  .wrapper {
    background-color: whitesmoke;
    padding: 13px;
    border-radius: 15px;
    width: 300px;
  }

  .control {
    display: flex;
    
  }

  .input {
    align-self: flex-start;
  }

  .button-is-success {
    align-self: flex-end;
    height: 34px;
    margin-left: 10px;
    background-color: white;
    border-radius: 6px;
    font-family: 'Roboto', sans-serif;;
    font-weight: 500;
    
  }

  .subtitle {
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
</style>