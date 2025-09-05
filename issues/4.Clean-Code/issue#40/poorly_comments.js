function getDataById(Id) {
    // function get data
    let dataById = database.find(Id); // find something using Id
    return dataById; // show it
}
