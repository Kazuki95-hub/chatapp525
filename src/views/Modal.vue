<template>
    <div id="overlay">
        <div id="content">
            <p>登録完了しました</p>
            <p>下記ボタンからログインしてください</p>
            <button @click= "closeModal">ログイン画面へ</button>
        </div>
    </div>
</template>

<style scoped>
#content {
    z-index: 100;
    width: 50%;
    padding: 1em;
    background: rgb(214, 255, 248);
    margin:0 auto;
}
</style>

<script>
export default {
    methods: {
        closeModal() {
            this.$router.replace("/login");
        }
    }
}
</script>