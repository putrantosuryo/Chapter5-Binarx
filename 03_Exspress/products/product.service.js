const getProduct =(request,response) => {
    return response.send("ProductCollection");
}

module.exports = {getProduct};