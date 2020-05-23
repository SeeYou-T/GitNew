import Loadable from "react-loadable"
import loading from "../components/loading"

const HOME = Loadable({
    loader:()=> import("./home"),
    loading
})

const MINE = Loadable({
    loader:()=>import("./mine"),
    loading
    
})

const SEARCH = Loadable({
    loader:()=>import("./search"),
    loading
})

export {
    HOME,
    MINE,
    SEARCH
}