<template >
    <div class="pad" >
      <div>
          <v-img
              :src="`${publicPath}PEDRO_FULL.png`"
              aspect-ratio="0.3"
              max-height="500px"
              class="roundimage"
          ></v-img>

          <v-card-title primary-title>
              <div class="pedro">
                  <h3 class="headline mb-0">Myros</h3>
                  Je suis Miros, j’ai 101 ans.
                  J’habite à Lentas, un petit village crétois.
                  Je suis pêchers et mes amis sont pêcheurs aussi alors le poisson ça me connaît ! Je les mange avec des légumes, un peu d’ail, arrosés d’huile d’olive, un vrai régal !
                  Je marche tous les jours dans ma colline, ça me rend heureux et je suis optimiste de nature !
                  Alors partageons ensemble davantage sur mes astuces et recettes du vivre longtemps en bonne santé !
              </div>
          </v-card-title>
      </div>
    </div>
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

    .paysage::after {
      content: "";
      background-image: url("http://localhost:8080/PAYSAGE.png");
      background-position: 52% 50%;
      background-size: cover;
      opacity: 0.1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 0;
    }
    .pad {
      padding-right: 10%;
    }

</style>
