exports.index = function(request, response)
{
    response.pageInfo = {}
    response.pageInfo.name = "Synn.nl"
    
    response.render('home/index', response.pageInfo);
};
 
exports.other = function(request, response)
{
    response.pageInfo = {}
    response.pageInfo.content = "This is the website of Synn.nl"

    response.render('home/other', response.pageInfo);
};