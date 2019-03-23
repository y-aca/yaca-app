<template>
    <v-card>
        <v-img
            :src="`${publicPath}PACITO.png`"
            aspect-ratio="0.3"
            max-height="500px"
        ></v-img>

        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Pedro</h3>
                <div>Ma spécialité ? Les sandwichs au jambon !</div>
            </div>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    data: () => {
        return {
            publicPath: process.env.BASE_URL,
        }
    }
}
</script>

<style>

</style>
