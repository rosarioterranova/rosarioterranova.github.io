const app = Vue.createApp({
    template: `
        <div>
            <my-navbar />
            <my-about />
            <my-portfolio />
            <my-footer />
        </div>
    `
})

app.component("my-navbar",{
    template:`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand"><i class="fas fa-code"></i> Rosario Terranova </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/#/games">Games</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/#/mobile-apps">Mobile Apps</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/#/web-apps">Web Apps</a>
                </li>      
            </ul>
        </div>
    </nav>
    `
})

app.component("my-about",{
    template: `
    <div>
        <div class="container-fluid text-center text-light bg-dark p-5">
            <h1 class="display-4 mt-4">Rosario Terranova</h1>
            <p class="lead">Senior Software Engineer</p>
        </div>
        <div class="container my-5">
            <div class="row">
                <div class="col-12 col-md-4 text-center">
                    <img id="img-profile" src="img/me.jpg" class="rounded-circle float-md-right mb-1" alt="Rosario Terranova">
                </div>
                <div class="col-12 col-md-8">
                    <p>I'm a software engineer with more than 5 years of professional and commercial experience in development of software, web apps, games, 3D, AR and VR applications with various tech stacks and pipelines.</p>
                    <div class="text-center text-md-left">
                        <div class="btn-group" role="group">
                            <a href="mailto:rosarioterranova91@gmail.com" target="_blank"><i class="far fa-envelope"></i> Email</a>
                            <a href="https://www.linkedin.com/in/rosarioterranova/" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i> LinkedIn</a>
                            <a href="https://github.com/rosarioterranova" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                            <a href="https://twitter.com/rosterranova" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

app.component("my-project",{
    template:`
    <div class="col-12 col-md-6 col-xl-4 mb-3">
            <div class="card bg-dark h-100">
                <img class="card-img-top" :src="data.img">
                <div class="card-body">
                    <h5 class="card-title"> {{data.title}} </h5>
                    <p class="card-text text-left">{{data.description}}</p>
                    <div class="text-right">
                        <span class="card-text badge badge-pill badge-info text-light">{{data.tech}}</span>
                        <span class="card-text badge badge-pill badge-success text-light">{{data.platforms}}</span>
                    </div>
                </div>
                <div class = "row m-2">
                    <div v-if="'link' in data" class="col px-1"> <a :href="data.link" target="_blank" class="btn btn-primary btn-block bg-primary"><i class="fas fa-external-link-square-alt"></i> Info</a> </div>
                    <div v-if="'linkCode' in data" class="col px-1"> <a :href="data.linkCode" target="_blank" class="btn btn-primary btn-block bg-secondary"><i class="fas fa-code"></i> Code</a> </div>
                </div>
            </div>
        </div>
    `,
    props:["data"]
})

app.component("my-portfolio", {
    template:`
    <div>
        <div class="text-center">
            <button type="button" class="btn" :class="{'btn-dark': !showGames, 'btn-primary': showGames}" @click="showGames = !showGames"><i class="fa fa-gamepad" aria-hidden="true"></i> Games</button>
            <button type="button" class="btn mx-2" :class="{'btn-dark': !showWeb, 'btn-primary': showWeb}" @click="showWeb = !showWeb"><i class="fa fa-mobile" aria-hidden="true"></i> Mobile Apps</button>
            <button type="button" class="btn" :class="{'btn-dark': !showMobile, 'btn-primary': showMobile}" @click="showMobile = !showMobile"><i class="fa fa-globe" aria-hidden="true"></i> Web Apps</button>
        </div>

        <div class="my-4 text-center" v-if="!showGames && !showWeb && !showMobile">
            <p><i class="gear fa fa-cog fa-6x" aria-hidden="true"></i></p>
            <p> Please select a category... </p>
        </div>

        <div class="row container-fluid my-5 text-center mx-auto" v-if="showGames">
            <my-project v-for="project in gamesData" :data="project" />
        </div>
        <div class="row container-fluid my-5 text-center mx-auto" v-if="showWeb">
            <my-project  v-for="project in mobileData" :data="project" />
        </div>
        <div class="row container-fluid my-5 text-center mx-auto" v-if="showMobile">
            <my-project  v-for="project in webData" :data="project" />
        </div>
    </div>
    `,
    methods:{
        async getProjects(link){
            const response = await fetch(link)
            const data = await response.json()
            this.sortData(data)

        },
        sortData(data){
            for (const project of data) {
                if(project.category === "web") this.webData.push(project)
                else if(project.category === "games") this.gamesData.push(project)
                else if(project.category === "mobile") this.mobileData.push(project)
            }
        }
    },
    data(){
        return{
            showGames: false,
            showWeb: false,
            showMobile: false,
            gamesData:[],
            webData:[],
            mobileData:[]
        }
    },
    created(){
        this.getProjects("projects.json")
    }
})

app.component("my-footer",{
    template:`
    <footer class="text-center text-light bg-dark py-2 mt-4">
        © Rosario Terranova {{ new Date().getFullYear() }} | Made with <a href="https://vuejs.org/">Vue.js</a>
    </footer>
    `
})

app.mount("#app")