<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">SingUp</router-link>
    </div>
    <router-view/>
  <ChatMessage />
  <Message />
  </div>
</template>

<script>
import ChatMessage from "../src/components/ChatMessage";
import Message from "../src/components/Message";
export default {
  components: {
    ChatMessage,
    Message
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: block;
}

.box{
  display: inline-block;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.text{
  margin-top: 10px;
}

.message{
  display:block;
  padding: 3px;
  border:1px solid black;
}
</style>
