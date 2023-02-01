import {headerApp} from "./components/Header.js";
import {user} from "./components/user.js";
import {modal} from "./components/modal.js";

const app = Vue.createApp({
    template: `
        <div class="card-products card-container">
            <div class="card" v-for="product in prComputed" :class="{cart : product.isCart}" @dblclick="onToggleCart($event, product)">
                <img class="card-thumb" :src="product.img" alt="">
                <h3>{{product.name}}</h3>
                <p>{{product.price}}</p>
            </div>
        </div>
        <header-app ref="headApp"></header-app>
        <user></user>
        <button @click="onToggleModal">Toggle Modal</button>
        <base-modal v-if="isShowModal" title="This is title from main.js" content="Content nè" theme="sales" @cancel="onToggleModal"></base-modal>
        <button @click="onChange">Change Me</button>
       
    `,
    components: {
        'header-app': headerApp,
        'user': user,
        'base-modal': modal,
    },
    data() {
        return {
            products: [
                {
                    name: 'SP 1',
                    price: 100,
                    img: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png',
                    isCart: false,
                },
                {
                    name: 'SP 2',
                    price: 150,
                    img: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png',
                    isCart: true,
                },
                {
                    name: 'SP 3',
                    price: 200,
                    img: 'https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png',
                    isCart: false,
                }
            ],
            isShowModal: false,
        }
    },
    methods: {
        onToggleCart(event, product){
            product.isCart = !product.isCart;
        },
        onChange(){
            console.log(this.$refs.headApp);
            this.$refs.headApp.onConsole(); //template ref: giúp truy cập và lấy dữ liệu, method.. của 1 component từ bên ngoài
        },
        onToggleModal(){
            this.isShowModal = !this.isShowModal;
        },
    },
    computed:{
      prComputed(){
          return this.products.filter((product) => product.price > 140)
      }
    },
});

app.mount('#contact');