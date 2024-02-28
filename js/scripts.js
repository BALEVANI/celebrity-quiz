$(document).ready(function () {

    $("#match").click(function () {
        const question1 = $("input:radio[name = question1]:checked").val()
        const question2 = $("input:radio[name = question2]:checked").val()
        const question3 = $("input:radio[name = question3]:checked").val()
        const question4 = $("input:radio[name = question4]:checked").val()
        const question5 = $("input:radio[name = question5]:checked").val()

        if (question1 === "Black" && question3 === "Happy") {
            $("#main").hide()
            $("#result3").hide()
            $("#result2").hide()
            $("#result1").show()

        } else if (question4 === "Yellow" && question5 === "Less often") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").hide()
            $("#result2").show()
        }

     else if (question2 === "Gold" && question5 === "Athletic") {
        $("#main").hide()
        $("#result1").hide()
        $("#result3").show()
        $("#result2").hide()
    }

    else {
        $("#main").hide()
        $("#result1").hide()
        $("#result3").hide()
        $("#result2").show()
    }
})
})

