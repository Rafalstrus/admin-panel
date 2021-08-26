const Types = {
  SET_DATA_FROM_API: "SET_DATA_FROM_API",
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
  CHANGE_ID_TO_DELETE: "CHANGE_ID_TO_DELETE",
  SORT_USERS: "SORT_USERS"
};
// actions
const setDataFromApi = (data :any) =>({
  type : Types.SET_DATA_FROM_API,
  data: data
})
const addUser =(user :any) =>({
  type : Types.ADD_USER,
  user: user
})
const changeIdToDelete = (id : number) =>({
  type : Types.CHANGE_ID_TO_DELETE,
  id: id
})
const deleteUser =(id :number) =>({
  type : Types.DELETE_USER,
  id: id
})
const sortUsers =() =>({
  type : Types.SORT_USERS
})
const exportedObject ={
  setDataFromApi,
  addUser,
  deleteUser,
  changeIdToDelete,
  sortUsers,
  Types
}
export default exportedObject