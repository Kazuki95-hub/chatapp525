<template>
    <div class="chat">
        <p>メッセージ</p>
        <textarea v-model= "share"></textarea>
        <div @click= "send">
            <button>送信</button>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
    data(){
        return{
            share: "",
        };
    },
    methods: {
        send(){
            if(this.share === "") {
                alert("メッセージを入力してください");
            }else{

            }
        }
    }
}
</script>

<style scoped>
.chat{
    margin: 15px;
}
.chat textarea {
    width: 30%;
    height: 120px;
    margin-top:15px;
    margin-bottom: 15px;
    margin-right: 90%;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
    color: black;
}
button{
    width: 30%;
    text-align:center;
    padding: 8px 0 10px;
    color: green;
    /* margin-right: 90%; */
    background-color: #f0b039;
    border-radius: 25px;
    display: block;
    margin: 0 90% 0 auto;
}
</style>