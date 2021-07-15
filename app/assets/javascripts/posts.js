/*
document.addEventListener('turbolinks:load', function(){
    var links = document.getElementsByTagName('a')
    for(link of links){
        link.addEventListener('click', function(e){
            e.preventDefault()
            $.ajax({
                url: e.target.href,
                method: 'get',
                dataType: 'script'
                error: function(error){ console.log(error) }
            })
        })
    }
})
*/
/*
document.addEventListener('turbolinks:load', function(){
    document.addEventListener('ajax:success', function(event){
        var response = event.details
        console.log(response);
    })
})
*/

document.addEventListener('turbolinks:load', function(){
    document.addEventListener('ajax:error', function(event){
        var errors = event.detail[0],
            error_string = ''
            
        for(var prop in errors) {
            error_string = prop + ': ' + errors[prop]
        }
        alert(error_string)
    });
})