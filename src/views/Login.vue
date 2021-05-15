<template>
    <div>
        <div class="header flex">
            <div class="left">
                <h2>Chat</h2>
            </div>
            <div class="right flex">
                <p>新規登録</p>
                <p>ログイン</p>
            </div>
        </div>
        <div class="card">
            <p>ログイン</p>
            <div class="form">
                <input type="text" placeholder="メールアドレス" v-model= "email" />
                <input type="text" placeholder="パスワード" v-model= "password" />
                <button @click= "auth">ログイン</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email:"",
            password:""
        };
    },
    methods: {
        auth() {
            this.$store.dispatch("login", {
                email:this.email,
                password:this.password
            });
        }
    }
}
</script>

<style scoped>
.card {
    border:1px solid black;
    display: inline-block;
    width: 250px;
}

.card p{
    text-align: center;
}

input{
    padding: 5px;
    margin:10px;
}

.form {
    text-align: center;
}
button {
    width: 100px;
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>