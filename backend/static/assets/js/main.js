import {headerApp} from "./components/Header.js";
import {user} from "./components/user.js";
import {modal} from "./components/modal.js";
import {quizForm} from "./components/QuizForm.js";

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
        <base-modal style="color: #0b0f0e" v-if="isShowModal" title="Tai tồ :D" content="Content nè" theme="sales" @cancel="onToggleModal">
            <template v-slot:header> <!--Sử dụng thẻ template với v-slot: <name> -->
                <p>hét đơ nè</p>
            </template>
            <template v-slot:footer>
                <button @click="onToggleModal">Cancel</button>
            </template>
            <p>Còn tent</p> <!--Nếu không có thẻ template sẽ nhảy vào slot mặc định (không có name)-->
            <!--Không cần phải viết đúng theo thứ tự bởi bên kia đã có name rồi
                những cái slot tự động nhảy vào slot name của nó-->
        </base-modal>
        <button @click="onChange">Change Me</button>
        <table style="margin-top: 2rem">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
            </thead>
            <tbody v-for="place in location">
                <td style="padding: 6px">{{ place.id }}</td>
                <td style="padding: 6px">{{ place.name }}</td>
                <td style="padding: 6px">{{ place.location }}</td>
            </tbody>
        </table>
        
        <quiz-form></quiz-form>
        
        
    `,
    components: {
        'header-app': headerApp,
        'user': user,
        'base-modal': modal,
        'quiz-form': quizForm,
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
            location: [],
        }
    },
    created() {
        fetch('http://ditich.atkthainguyen.org.vn/api/place')
            .then(response => response.json())
            .then(data => {
                this.location = data.results;
                console.log(data.results);
            })
    },
    methods: {
        onToggleCart(event, product) {
            product.isCart = !product.isCart;
        },
        onChange() {
            console.log(this.$refs.headApp);
            this.$refs.headApp.onConsole(); //template ref: giúp truy cập và lấy dữ liệu, method.. của 1 component từ bên ngoài
        },
        onToggleModal() {
            this.isShowModal = !this.isShowModal;
        },
    },
    computed: {
        prComputed() {
            return this.products.filter((product) => product.price > 140)
        }
    },
});

app.mount('#contact');