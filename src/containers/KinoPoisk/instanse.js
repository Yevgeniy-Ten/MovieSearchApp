import axios from "axios"

const instanse = axios.create({
    baseURL: "http://api.tvmaze.com"
})
// /shows/:id информация по одному конкретному сериалу
// /search/shows?q=:query для короче ну один символ ввёл и совпадения пришли