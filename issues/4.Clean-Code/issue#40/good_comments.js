/**
 * Get an item from the database by its ID.
 *
 * The ID element is the identifier of the item to return
 * 
 */
function getDataById(Id) {
    // Require the item from the database
    // Using database.find() avoids exposing the full database API
    const dataById = database.find(Id);
    
    // Return the required data
    return dataById;
}
