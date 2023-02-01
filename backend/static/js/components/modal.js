export const modal = {
    template: `
        <div class="modal fade show" @click="onCloseModal">
            <div class="modal-dialog">
                <div class="modal-content" :class="{ 'bg-red': theme === 'contact'}">
                    <div class="modal-header">
                        <h2>{{title}}</h2>
                    </div>
                    <div class="modal-body">
                        <p>{{ content}}</p>
                    </div>
                    <div class="modal-footer">Footer</div>
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
        };
    },
    methods:{
        onCloseModal() {
            this.$emit('cancel'); //emit: Gửi event từ children sang parents (modal đang là con của main qua base-modal)
        }
    }
}