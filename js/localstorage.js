$('#students_13').on('load-success.bs.table, getFromLocationStorage);

function getFromLocationStorage() {
    if (window.localStorage != null) {
        var url = location.href;
        if (url.indexOf("#") != -1)
            url = url.substr(0, url.indexOf('#'));
        var key = "inputs-" + url;
        try {
            var values = JSON.parse(localStorage.getItem(key));
            for (var index in values) {
                jQuery("input[name=" + index + "]").val(values[index]);
                console.log(values);
            }
        } catch (e) {}
    }
}

function saveToLocalStorage() {
    if (window.localStorage != null) {
        var url = location.href;
        if (url.indexOf("#") != -1)
            url = url.substr(0, url.indexOf('#'));
        var key = "inputs-" + url;
        var values = {};

        jQuery("input").each(function() {
            values[jQuery(this).attr("name")] = jQuery(this).val();
        });

        try {
            localStorage.setItem(key, JSON.stringify(values));
        } catch (e) {
            localStorage.removeItem(key);
        }
    }
}
