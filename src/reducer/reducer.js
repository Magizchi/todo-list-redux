import constant from '../constants/constant';

const initialState = {
    inputText:'',
    list:[],
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case constant.TEXT:
            return {
                inputText: action.text,
                list : state.list,
            }
        case constant.ADD_LIST:
            if(state.inputText !== '') {
                return{
                    list : [...state.list, state.inputText],
                    inputText : '',
                }
            } else {
                return{
                    list : state.list,
                    inputText : '',
                }
            }
        case constant.DELETE_LIST:
            const copyList = state.list.slice()
            copyList.splice(action.index, 1)
            return{
                list : copyList,
                inputText : '',
            }
        case constant.CHECKED:
            const checked = document.getElementsByClassName('item'+action.index);
            checked[0].style.textDecoration = 'none' ? 'line-through' : 'none'
            
            return{
                list : state.list,
                inputText : '',
            }
        default:
        return state;
    }
}


export default reducer



