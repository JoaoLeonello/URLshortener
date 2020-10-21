<template>
    <div class="wrapper">
      <!-- <form class="form" @submit.prevent="save"> -->
        <h3 class='subtitle'>URL Encoder</h3>
          <div class="control">
            <input class="input" type="text" v-model="url">
            <button class="button-is-success" v-on:click="shortUrl">Encode</button>
          </div> 
          <br>
        <a v-if="short" :href="short">{{short}}</a> 
      <!-- </form> -->
    </div>
</template>

<script>
  export default {
    data: () => ({ 
      url: "",
      short: ""
    }),
    methods: {
      shortUrl: function () {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: this.url })
        };

        fetch('http://localhost:3000/short-url', requestOptions)
        .then(response => response.json())
        .then(data => (this.short = data.shortUrl));

        console.log(this.short)
      }
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