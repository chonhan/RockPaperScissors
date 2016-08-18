$(function() {
    $.material.init();

    var TOTAL_ITEMS = 29;
    var result, imageArray = [];
    var originalArray = [];

    originalArray = initImageArray(TOTAL_ITEMS);

    $('#simple-dialog').on('shown.bs.modal', function() {

        if (imageArray.length === 0) {
            imageArray = originalArray;
            shuffle(imageArray);
            shuffle(imageArray);
        }

        console.log(imageArray);
        result = imageArray[0];
        imageArray.shift();

        $('#finalCount1 img').attr('src', result);
        $('#finalCount3').delay(300).show(500, function() {
            $('#finalCount3').delay(500).hide(500, function() {
                $('#finalCount2').show('slow', function() {
                    $('#finalCount2').delay(500).hide(700, function() {
                        $('#finalCount1').delay(1000).css('display', 'block');
                    });
                });
            });
        });
    });

    $('#simple-dialog').on('hidden.bs.modal', function() {
        $('#finalCount1').css('display', 'none');
    })
});

function initImageArray(amount) {
    var thisArray = [];
    for (var i = 1; i <= amount; i++) {
        thisArray.push('img/' + i + '.jpg');
    }

    $.preload(thisArray);
    return thisArray;
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
