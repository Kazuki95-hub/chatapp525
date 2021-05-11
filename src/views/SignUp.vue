<template>
    <div>
        <div class="card">
            <p>新規登録</p>
            <div class="form">
                <input type="text" placeholder="ユーザーネーム">
                <input type="text" placeholder="プロフィール">
                <input type="text" placeholder="メールアドレス">
                <input type="text" placeholder="パスワード">
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