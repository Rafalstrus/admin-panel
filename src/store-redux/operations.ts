import ACTIONS from "./action";
import store from './store';



const mapStateToProps = (state :any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch :any) => ({
    setDataFromApi: (data :any) => dispatch(ACTIONS.setDataFromApi(data)),
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store