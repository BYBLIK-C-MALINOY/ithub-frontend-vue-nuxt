<script lang="ts" setup>
import { authClient } from '~/lib/auth-client';

const { data } = await useFetch('/api/test')
const session = authClient.useSession()

</script>

<template>
    <div>
        <p v-if="session?.data">{{ session.data.user }}</p>
        <p v-else>Guest</p>

        <Typography type="h1" content="Home page" />
        <Typography type="p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Typography>
        <button>
            <NuxtLink to="/auth">Authorization</NuxtLink>
        </button>
    </div>
    <img src="/images/tools.png" alt="tools image">
</template>

<style scoped>
div {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 42px;
}

img {
    max-height: 290px;
}

button {
    background-color: rgb(255, 100, 100);
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 7px 43px;
    border: 0;
    cursor: pointer;
    width: 208px;
}
</style>