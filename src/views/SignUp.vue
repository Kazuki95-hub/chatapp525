<template>
    <div>
        <div class="card">
            <p>新規登録</p>
            <div class="form">
                <input type="text" placeholder="ユーザーネーム" v-model= "name">
                <input type="text" placeholder="プロフィール" v-model= "profile">
                <input type="text" placeholder="メールアドレス" v-model= "email">
                <input type="text" placeholder="パスワード" v-model= "password">
                <button @click= "auth()">新規登録</button>
            </div>
        </div>
    </div>
</template>

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

<script>
import axios from "axios";
export default {
    data(){
        return {
            name: "",
            profile: "",
            email: "",
            password: ""
        };
    },
    methods: {
        auth() {
            axios.post("https://calm-garden-63863.herokuapp.com/api/register",{
                name:this.name,
                profile: this.profile,
                email: this.email,
                password: this.password
            })
            .then(response => {
                console.log(response);
                this.$router.replace("/modal");
            })
            .catch(error => {
                alert(error);
            });
        }
    }
}
</script>