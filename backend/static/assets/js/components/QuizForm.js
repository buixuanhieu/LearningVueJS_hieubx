export const quizForm = {
    template: `
        <form @submit.prevent="onSubmit" class="screen"> <!--prevent: sau khi submit sẽ giữ nguyên trang hiện tại-->
            <div class="container">
              <div class="row"><h1 class="title">Now, about your project...</h1></div>
              <div class="row">
                <div class="col-7">
                  <div class="section">
                    <p>
                      We like being on a first-name basis, but it also helps us get in
                      touch with you.
                    </p>
                    <div class="form-group">
                      <div class="form-item col">
                        <label for="name">What is your full name?</label>
                        <input
                          id="name" type="text" v-model="quiz.fullName"
                          placeholder="John Smith"
                          :class="{error : error.status}"
                        />
                        <p class="error-text" v-if="error.status">{{ error.text }}</p>
                        <p class="success-text" v-if="success.status">
                            {{ success.text }}
                        </p>
                      </div>
                      <div class="form-item col">
                        <label for="email">What is your email address?</label>
                        <input
                          id="email"
                          type="email" v-model="quiz.email"
                          placeholder="skyalbert.960@gmail.com"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <div class="section options">
                    <p>
                      What sort of creative work do you need help with? You can read
                      about our services
                    </p>
                    <div class="row">
                      <div class="col-4" v-for="option in jobOptions" :key="option.id">
                        <div class="block" :style="{ backgroundColor: quiz.jobs.includes(option.id) ? 'var(--primary)' : ''}">
                          <label class="option">
                            <span>{{ option.name }}</span>
                            <input type="checkbox" :value="option.id" checked v-model="quiz.jobs"/>
                            <span class="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="section right">
                    <p>
                      Tell us what you need help with, the purpose of this project and
                      problems wr’re solving.
                    </p>
                    <div class="form-item">
                      <label for="about">What is your project all about?</label>
                      <textarea
                        id="about" v-model="quiz.desc"
                        placeholder="Hey RHP Team, I’d love  to talk to you about  branding this Something AI  project we’re working..."
                        
                      />
                    </div>
                    <div class="form-item">
                      <ul class="items">
                        <li class="item">
                          <div class="file">
                            <div class="file-icon">
                              <img src="../static/assets/images/file.png" alt="File Icon" />
                            </div>
                            <div class="file-name">
                              website-information-architecture.pdf
                            </div>
                            <div class="file-icon">
                              <img src="../static/assets/images/close.png" alt="Close Icon" />
                            </div>
                          </div>
                        </li>
                        <li class="item">
                          <div class="file">
                            <div class="file-icon">
                              <img src="../static/assets/images/file.png" alt="File Icon" />
                            </div>
                            <div class="file-name">logo-animation.mov</div>
                            <div class="file-icon">
                              <img src="../static/assets/images/close.png" alt="Close Icon" />
                            </div>
                          </div>
                        </li>
                        <li class="item">
                          <div class="file">
                            <div class="file-icon">
                              <img
                                src="../static/assets/images/upload.png"
                                alt="Upload Icon"
                              />
                            </div>
                            <div class="file-name">Attach files</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="action">
              <div class="container">
                <div class="remaining">3/6 questions remaining</div>
                <div class="progress">
                  <div class="progress-inner">
                    <div class="progress-mask"></div>
                  </div>
                </div>
                <button type="submit" class="btn btn-submit">Submit</button>
              </div>
            </div>
        </form>
    `,
    component: {},
    data() {
        return {
            quiz: {
                fullName: 'Bùi Xuân Hiếu',
                email: '',
                desc: '',
                jobs: [],
            },
            error: {
                text: '',
                status: false,
            },
            success: {
                text: '',
                status: false,
            },
            jobOptions: [
                {
                    id: 1,
                    name: 'Branding',
                },
                {
                    id: 2,
                    name: 'Strategy',
                },
                {
                    id: 3,
                    name: 'Design',
                },
                {
                    id: 4,
                    name: 'Development',
                },
                {
                    id: 5,
                    name: 'Producer',
                },
                {
                    id: 6,
                    name: 'Maketing',
                },
                {
                    id: 7,
                    name: 'Copywriting',
                },
                {
                    id: 8,
                    name: 'Advisory',
                },
                {
                    id: 9,
                    name: 'Compositing',
                },
            ],
            design: false,
        };
    },
    methods: {
        onSubmit() {
            console.log(this.quiz);
            if (this.quiz.fullName.length < 6 || this.quiz.fullName.length > 18) {
                this.error = {
                    text: 'Tên từ 6 - 18 ký tự',
                    status: true,
                }
                this.success = {
                    text: '',
                    status: false,
                }
            }
            else if (this.quiz.fullName.length > 5 && this.quiz.fullName.length < 19){
                this.success = {
                    text: 'OK!',
                    status: true,
                }
                this.error = {
                    text: '',
                    status: false,
                }
            }
        }
    },
};