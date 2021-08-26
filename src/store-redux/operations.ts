import ACTIONS from "./action";
import store from './store';



const mapStateToProps = (state :any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch :any) => ({
    setDataFromApi: (data :any) => dispatch(ACTIONS.setDataFromApi(data)),
    addUser: (user :any) => dispatch(ACTIONS.addUser(user)),
    changeIdToDelete:(id:number) => dispatch(ACTIONS.changeIdToDelete(id)),
    deleteUser: (id :number) => dispatch(ACTIONS.deleteUser(id)),
    sortUsers: () => dispatch(ACTIONS.sortUsers())
});
export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store