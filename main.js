$(function(){

    $('.circle').appear();

    $('.circle').on('appear', function(event, $all_appeared_elements) {
        
        $('.first.circle').circleProgress({
            value: 0.8,
            size: 117
        });

        $('.second.circle').circleProgress({
            value: 1,
            size: 117,
            fill: {
            gradient: ["green", "orange"]
        }
        }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
        });
        
    });
    
});