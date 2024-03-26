(function($){
    $.fn.displayData = function(options){
        var settings = $.extend({
            url: '',
        }, options);

        return this.each(function(){
            var container = $(this);

            $.ajax({
                url: settings.url,
                dataType: 'json',
                success: function(data){
                    var table = $('<table>');
                    var headerRow = $('<tr>');
                    for (var key in data[0]){
                        headerRow.append($('<th>').text(key));
                    }
                    table.append(headerRow);

                    data.forEach(function(item){
                        var row = $('<tr>');
                        for (var key in item){
                            row.append($('<td>').text(item[key]));
                        }
                        table.append(row);
                    });

                    container.append(table);
                },
                error: function(){
                    container.text('Error loading data.');
                }
            });
        });
    };
})(jQuery);
