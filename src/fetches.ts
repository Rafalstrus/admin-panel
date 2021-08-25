export const fetchUsersData = async () => {
    var data ={}
        await fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
        .then(async (response) => {
            if (!response.ok) {
                console.clear()
                data = { "error": "404" }
            }
            else{
                data = await response.json()
            }
        })
    return await data
}