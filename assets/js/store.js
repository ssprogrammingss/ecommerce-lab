import {create} from 'https://cdn.jsdelivr.net/npm/zustand@5.0.1/+esm'

const useStore = create({
    msg: "Hello world"
})

export {
    useStore,
}