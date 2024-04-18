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

        }

        else if (question2 === "Brown" && question3 === "Quiet" && question5 === "More often") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").hide()
            $("#result2").show()
        }

        else if (question2 === "Brown" && question5 === "Not at all" && question1 === "Purple") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").show()
            $("#result2").hide()
        }

        else if (question1 === "Purple" && question2 === "Gray" && question4 === "Blue") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").hide()
            $("#result2").show()
        }

        else if (question5 === "More often" && question3 === "Green" && question2 === "Green") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").show()
            $("#result2").hide()
        }

        else if (question3 === "Happy" && question3 === "Green" && question3 === "Athletic") {
            $("#main").hide()
            $("#result1").show()
            $("#result3").hide()
            $("#result2").hide()
        }

        else if (question2 === "Blue" && question1 === "Gold" && question5 === "Everyday") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").show()
            $("#result2").hide()
        }

        else if (question1 === "Black" && question3 === "Athletic" && question2 === "Blue") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").show()
            $("#result2").hide()
        }

        else if (question2 === "Green" && question4 === "Green" && question1 === "Black") {
            $("#main").hide()
            $("#result1").hide()
            $("#result3").show()
            $("#result2").hide()
        }

        else {
            $("#main").hide()
            $("#result1").show()
            $("#result3").hide()
            $("#result2").hide()
        }
    })
})

