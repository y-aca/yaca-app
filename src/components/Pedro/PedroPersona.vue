<template>
    <v-card class="pa-2">
        <v-img
            :src="`${publicPath}PEDRO_FULL.png`"
            aspect-ratio="0.3"
            max-height="500px"
            class="roundimage"
        ></v-img>

        <v-card-title primary-title>
            <div class="pedro">
                <h3 class="headline mb-0">Myros</h3>
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

    .pedro {
        align: center;
    }
    .pedro>h3 {
        font-family: 'Luckiest Guy' !important;
    }
    .roundimage {
        border-radius: 5px;
    }
</style>
