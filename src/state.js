import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: null,
    fetchDataCard() {

        axios
            .get(this.url)
            .then(response => {

                this.cards = response.data.data

            })
            .catch(error => {
                console.log(error);
            })

    }
})