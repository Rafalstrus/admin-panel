const Types = {
  SET_DATA_FROM_API: "SET_DATA_FROM_API",
};
// actions
const setDataFromApi = (info :any) =>({
  type : Types.SET_DATA_FROM_API,
  info: info
})
const exportedObject ={
  setDataFromApi,
  Types
}
export default exportedObject