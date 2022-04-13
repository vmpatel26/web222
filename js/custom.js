$('.scrollTo').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 700);
    return false;
});

window.onload = function() {
    document.getElementsByName('hrate')[0].style.display = "none";
}

for (var i = 0; i < document.getElementsByName('radio-group').length; i++) {
    document.getElementsByName('radio-group')[i].addEventListener('change', function() {
        if (this !== null) {
            if (document.getElementById('test1').checked == true) {
                console.log(this);
                document.getElementsByName('hrate')[0].style.display = "block";
            } else {
                document.getElementsByName('hrate')[0].style.display = "none";
            }
        }
    });
}

document.getElementById('pcode').onchange = function() {
    if (document.getElementById('city').value == null || document.getElementById('city').value == "") {
        alert("Please Select a City");
        document.getElementById('pcode').value = "";
    }
};

function validateForm() {
    let pcode = document.forms["vaibhav"]["pcode"].value;
    let city = document.forms["vaibhav"]["city"].value;
    let hrate = document.forms["vaibhav"]["hrate"].value;
    let name = document.forms["vaibhav"]["name"].value;
    let email = document.forms["vaibhav"]["email"].value;
    let address = document.forms["vaibhav"]["address"].value;
    let comment = document.forms["vaibhav"]["comment"].value;
    if (city.toLowerCase() == "North York") {
        if (pcode.toLowerCase().trim() != 'm2j') {
            alert("PLease Enter Valid PostalCode According to City");
            document.forms["vaibhav"]["pcode"].value = "";
            return false;
        }
    }
    if (city.trim().toLowerCase() == "Richmond Hill ") {
        if (pcode.toLowerCase().trim() != 'l4b' && pcode.toLowerCase().trim() != 'l4e') {
            alert("PLease Enter Valid PostalCode According to City");
            document.forms["vaibhav"]["pcode"].value = "";
            return false;
        }
    }
    if (city.toLowerCase() == "montreal ") {
        if (pcode.toLowerCase().trim() != 'h1a') {
            alert("PLease Enter Valid PostalCode According to City");
            document.forms["vaibhav"]["pcode"].value = "";
            return false;
        }
    }
    if (city.toLowerCase() == "brampton ") {
        if (pcode.toLowerCase().trim() != 'm5g') {
            alert("PLease Enter Valid PostalCode According to City");
            document.forms["vaibhav"]["pcode"].value = "";
            return false;
        }
    }
    if (city.toLowerCase() == "kitchner") {
        if (pcode.toLowerCase().trim() != 'n0b230') {
            alert("PLease Enter Valid PostalCode According to City");
            document.forms["vaibhav"]["pcode"].value = "";
            return false;
        }
    }

    if (document.getElementsByName('hrate')[0].style.display == "block") {
        if (hrate == null || hrate == "") {
            alert("Please enter hourly Rate");
            document.forms["vaibhav"]["hrate"].value = "";
            return false;
        }
    }
    if (name == null || name == "") {
        alert("Please enter Name");
        return false;
    }
    if (address == null || address == "") {
        alert("Please enter Address");
        return false;
    }
    if (email == null || email == "") {
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {

        } else {
            alert("Please enter Email");
            return false;
        }
    }
    if (comment == null || comment == "") {
        alert("Please enter Comment");
        return false;
    }
}