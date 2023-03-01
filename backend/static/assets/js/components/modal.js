export const modal = {
    template: `
        <div class="modal fade show" @click.self="onCloseModal"> <!--event click.self là 1 trong những even modifier, cái self ở đây có thể hiểu nôm na là cái event bên trong sẽ chạy ở bên ngoài cái thằng modal (Youtube: vue.js 3 - #5 - trantoan - 35:20)-->
            <div class="modal-dialog">
                <div class="modal-content" :class="{ 'bg-red': theme === 'contact'}">
                    <div class="modal-header">
                        <slot name="header"></slot> <!--Slot: Chèn đối tượng html từ bên ngoài vào đây theo name-->
                    </div>
                    <div class="modal-body">
                        <slot></slot> <!--Cái này là slot mặc định không có name-->
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    `,
    props:{ // truyền dữ liệu thông qua thuộc tính (attribute: same class, src..) của components được gọi
        title: {
            type: String,
            required: true,
        },
        content:{
            type: String,
            default: '',
        },
        theme:{
            type: String,
            default: 'example',
            validator (val) {
                return ['contact', 'example', 'sales'].includes(val)
            }
        }
    },
    data() {
        return{
            abc: 'hiếu nè',
        };
    },
    methods:{
        onCloseModal() {
            console.log(this.abc);
            this.$emit('cancel'); //emit: Gửi event từ children sang parents (modal đang là con của main qua base-modal)
        }
    }
}