$(document).ready(function () {
    showProducts();
    $('#searchInput').on('input', function () {
        var searchTerm = $(this).val().trim();
        if (searchTerm.length > 0) {
           
            searchProducts(searchTerm);
        }
        else {
           
            showProducts();
        }
    });



})
$('.checkbox').on('change', function () {
    var checkboxValues = []; 
    $('.checkbox:checked').each(function () {
        checkboxValues.push($(this).val()); 
    });
    Searchbyfilters(checkboxValues); 
});




function showProducts() {
    $.ajax({
        url: 'Product/ProductList',
        type: 'GET',
        dataT: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, statu, xhr) {
            var obj = "";
            $.each(result, function (index, item) {
                obj += '<tr>';
                obj += '<td>' + item.productName + '</td>';
                obj += '<td>' + item.brandName + '</td>';
                obj += '<td>' + item.categories.categoryName + '</td>';

                var ram = "";
                var storage = "";
                var processor = "";

                $.each(item.productVariantMappings, function (variantIndex, variant) {
                    ram += variant.variants.ram + 'GB<br>';
                    storage += variant.variants.storage + 'GB<br>';
                    processor += variant.variants.processor + '<br>';
                });

                obj += '<td>' + ram + '</td>';
                obj += '<td>' + storage + '</td>';
                obj += '<td>' + processor + '</td>';

                obj += '</tr>';
            })
            $('#tblData').html(obj);
        },
        error: function () {
            alert("Data can't get");
        }
    });
};


function searchProducts(searchTerm) {
    $.ajax({
        url: 'Product/Search', 
        type: 'GET',
        dataType: 'json',
        data: { searchTerm: searchTerm },
        success: function (result, statu, xhr) {
            var obj = "";
            $.each(result, function (index, item) {
                obj += '<tr>';
                obj += '<td>' + item.productName + '</td>';
                obj += '<td>' + item.brandName + '</td>';
                obj += '<td>' + item.categories.categoryName + '</td>';

                var ram = "";
                var storage = "";
                var processor = "";

                $.each(item.productVariantMappings, function (variantIndex, variant) {
                    ram += variant.variants.ram + 'GB<br>';
                    storage += variant.variants.storage + 'GB<br>';
                    processor += variant.variants.processor + '<br>';
                });

                obj += '<td>' + ram + '</td>';
                obj += '<td>' + storage + '</td>';
                obj += '<td>' + processor + '</td>';

                obj += '</tr>';
            })
            $('#tblData').html(obj);
        },
        error: function () {
            alert("Error occurred while searching.");
        }
    });
}

function Searchbyfilters(searchTerm){
    $.ajax({
        url: 'Product/SearchByFilter',
        type: 'GET',
        dataType: 'json',
        data: { searchTerm: searchTerm.join(',') },
        success: function (result, statu, xhr) {
            var obj = "";
            $.each(result, function (index, item) {
                obj += '<tr>';
                obj += '<td>' + item.productName + '</td>';
                obj += '<td>' + item.brandName + '</td>';
                obj += '<td>' + item.categories.categoryName + '</td>';

                var ram = "";
                var storage = "";
                var processor = "";

                $.each(item.productVariantMappings, function (variantIndex, variant) {
                    ram += variant.variants.ram + 'GB<br>';
                    storage += variant.variants.storage + 'GB<br>';
                    processor += variant.variants.processor + '<br>';
                });

                obj += '<td>' + ram + '</td>';
                obj += '<td>' + storage + '</td>';
                obj += '<td>' + processor + '</td>';

                obj += '</tr>';
            })
            $('#tblData').html(obj);
        },
        error: function () {
            alert("Error occurred while searching.");
        }
    });
}