<template>
  <div class="min-h-screen bg-gray-100 ">
    <div class="bg-white">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">
              <nuxt-link to="/">Ngoding Bentar</nuxt-link>
            </span>
            <span class="ml-3 text-xl">Cek Ongkir</span>
          </a>
        </div>
      </header>
    </div>
    <div class="section lg:flex">
      <div class="section-input lg:w-4/6">
        <div class="bg-white p-8 rounded-3xl">
          <div class="main">
            <form class="content">
              <div class="items">
                <div class="item">
                  <h1 class="font-bold text-xl">Alamat Asal</h1>
                  <label class="block  tracking-wide text-black text-xs font-semibold mt-4 mb-3" for="grid-first-name">
                    Pilih Provinsi
                  </label>
                  <div class="relative">
                    <select v-model="asalProv" @change="setAsalCity()" class="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option v-for="(prov, index) in province" :key="index" :value="prov.province_id">{{prov.province}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="items">
                <div class="item">
                  <label class="block  tracking-wide text-black text-xs font-semibold mt-4 mb-3" for="grid-first-name">
                    Pilih Kota
                  </label>
                  <div class="relative">
                    <select v-model="asalCity" class="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option v-for="(x, index) in cityAsal" :key="index" :value="x.city_id">{{x.city_name}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <form class="content">
              <div class="items">
                <div class="item">
                  <h1 class="tujuan font-bold text-xl">Alamat Tujuan</h1>
                  <label class="block tracking-wide text-black text-xs font-semibold mt-4 mb-3" for="grid-first-name">
                    Pilih Provinsi
                  </label>
                  <div class="relative">
                    <select v-model="selectedProv" @change="setCity()" class="block appearance-none w-full border border-gray-200 text-black py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option v-for="(prov, index) in province" :key="index" :value="prov.province_id">{{prov.province}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="items">
                <div class="item">
                  <label class="block  tracking-wide text-black text-xs font-semibold mt-4 mb-3" for="grid-first-name">
                    Pilih Kota
                  </label>
                  <div class="relative">
                    <select v-model="selectedCity" class="block appearance-none w-full border border-gray-200 text-black py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option v-for="(x, index) in city" :key="index" :value="x.city_id">{{x.city_name}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="berat flex flex-wrap mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block tracking-wide text-black text-xs font-bold mb-2" for="grid-city">
                    Berat (gram)
                  </label>
                  <input v-model="berat" @change="cek($event)"  class="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="1000">
                </div>
              </div>
            </form>
          </div>
          <button @click="cekBiaya()" class="cek-biaya focus:outline-none justify-end text-white font-bold py-2 px-4 rounded-full">
            Cek biaya
          </button>
        </div>
      </div>
      <div class="section-input lg:w-2/6 ">
        <div class="bg-white p-8 rounded-3xl">
          <div class="text-center">
            <p class="text-lg font-bold">Kurir</p>
          </div>
          <div class="mt-4 text-white font-semibold overflow-y-auto section-kurir">
            <div v-for="(x, index) in biayaJne" :key="index" class="kurir flex mb-4 p-2 rounded-xl">
              <!-- <input type="radio" :id="x.service" :value="x.cost[0].value" class="my-auto" v-model="picked"> -->
              <label for="one" class="ml-4">
                <h1>JNE</h1>
                <p>{{x.service}} : {{x.cost[0].value}}</p>
              </label>
            </div>
            <div v-for="(x, index) in biayaPos" :key="index" class="kurir flex mb-4 p-2 rounded-xl">
              <!-- <input type="radio" :id="x.service" :value="x.cost[0].value" class="my-auto" v-model="picked"> -->
              <label for="one" class="ml-4">
                <h1>POS</h1>
                <p>{{x.service}} : {{x.cost[0].value}}</p>
              </label>
            </div>
            <div v-for="(x, index) in biayaTiki" :key="index" class="kurir flex mb-4 p-2 rounded-xl">
              <!-- <input type="radio" :id="x.service" :value="x.cost[0].value" class="my-auto" v-model="picked"> -->
              <label for="one" class="ml-4">
                <h1>Tiki</h1>
                <p>{{x.service}} : {{x.cost[0].value}}</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
import axios from 'axios'
export default {
  name: 'CekOngkir',
  setup(){
    const berat = ref(1000)
    const provinceAsal = ref([])
    const cityAsal = ref([])
    const province = ref([])
    const city = ref([])
    const selectedProv = ref('')
    const asalProv = ref('')
    const selectedCity = ref('')
    const asalCity = ref('')
    const biayaJne = ref('')
    const biayaPos = ref('')
    const biayaTiki = ref('')
    const picked = ref('')

    setProv()

    return {
      berat,
      province,
      city,
      cityAsal,
      asalProv,
      asalCity,
      selectedProv,
      selectedCity,
      biayaJne,
      biayaPos,
      biayaTiki,
      picked,
      cek,
      setProv,
      setCity,
      setAsalCity,
      cekBiaya
    }

    function cek() {
      console.log('asal',asalCity.value)
      console.log('tujuan',selectedCity.value)
    }

    async function setProv(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/province`
      const data = await axios.get(`${url}`);
      province.value = data?.data?.rajaongkir?.results
    }

    async function setAsalCity(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/city/${asalProv.value}`
      const data = await axios.get(`${url}`);
      cityAsal.value = data?.data?.rajaongkir?.results
    }

    async function setCity(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/city/${selectedProv.value}`
      const qs= {province: selectedProv.value}
      const data = await axios.get(`${url}`);
      city.value = data?.data?.rajaongkir?.results
    }

    async function cekBiaya(){
      cekBiayaJne()
      cekBiayaPos()
      cekBiayaTiki()
    }

    async function cekBiayaJne(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/ongkir/jne/${asalCity.value}/${selectedCity.value}/${berat.value}`
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      biayaJne.value = data?.data?.rajaongkir?.results[0]?.costs
    }

    async function cekBiayaPos(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/ongkir/pos/${asalCity.value}/${selectedCity.value}/${berat.value}`
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      biayaPos.value = data?.data?.rajaongkir?.results[0]?.costs
    }

    async function cekBiayaTiki(){
      const url = `https://ngodingbentar-api.herokuapp.com/api/orders/ongkir/tiki/${asalCity.value}/${selectedCity.value}/${berat.value}`
      // const data = await axios.get(`/api/v1${url}`, {headers});
      const data = await axios.get(`${url}`);
      biayaTiki.value = data?.data?.rajaongkir?.results[0]?.costs
    }
  }
}
</script>

<style lang="postcss" scoped>
.section {
  @apply block my-8 px-8 justify-between;
}
.section-input {
  @apply w-full p-8;
}
.main {
  @apply flex;
}
.content {
  @apply w-1/2 border-r-2 border-l-2;
}
.items{
  @apply flex flex-wrap mb-6 w-full;
  .item {
    @apply w-full px-3 mb-6;
  }
}
.garis {
  width: 5px;
  height: 30vh;
  background: black;
}

.cek-biaya {
  background: #0fbcf9;
}
.kurir {
  background: #0fbcf9;
}

.section-kurir {
  max-height: 350px;
}

@media only screen and (max-width: 650px) {
  .main {
    @apply block;
  }
  .section {
    @apply px-2;
  }
  .section-input {
    @apply w-full p-2;
  }
  .content {
    @apply w-full border-r-0 border-l-0;
  }
  .items{
    @apply mb-0;
    .item {
      @apply mb-2;
      .tujuan {
        @apply mt-8;
      }
    }
  }
  .berat {
    @apply mt-8;
  }
}

</style>