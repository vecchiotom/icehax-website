exports.index = function(request, response)
{
    response.pageInfo = {}
    response.pageInfo.name = "IceHax.it"
    
    response.render('home/index', response.pageInfo);
};
 
exports.other = function(request, response)
{
    response.pageInfo = {}
    response.pageInfo.content = "This is the website of IceHax.it"

    response.render('home/other', response.pageInfo);
};