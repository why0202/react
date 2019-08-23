import { createStore } from 'redux';
const counter = (state = {
    img: ''

}, action) => {
    // 执行对应的动作
    switch (action.type) {
        case 'setimg':
            return {
                img: action.imgurl
            }
        case 'getimg':
            return {
                img: state.img
            }
        default:{
            return {...state}
        }
            
    }
}

const store = createStore(counter);
export default store;