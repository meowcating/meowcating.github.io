let uniqueQuestion = "";

function putItDown() {
    document.getElementById("put-it-down").style.display = "flex";
    document.getElementById("section3").style.display="none";
    document.getElementById("section6").style.display="none";
    document.getElementById("section9.2").style.display="none";
}

function reset() {
    document.getElementById("question").value = "";
    document.getElementById('list').childNodes.item(0).textContent = "";

    document.getElementById("put-it-down").style.display = "none";
    document.getElementById("section1").style.display = "flex";

}

function publishIt() {
    document.getElementById("publish-it").style.display = "flex";
    document.getElementById("section10").style.display="none";
}

function nextSection() {
    var question = document.getElementById("question").value;
    document.getElementById('list').childNodes.item(0).textContent = question;
    uniqueQuestion = question;
    document.getElementById("unique-question").textContent = uniqueQuestion;

    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "flex";
}

function resetData1() {
    document.getElementById("question").value = "";
    document.getElementById('list').childNodes.item(0).textContent = "";

    document.getElementById("section2").style.display = "none";
    document.getElementById("section1").style.display = "flex";
}

function nextToExist() {
    var canBeAnswered = "It can be answered with data.";
    document.getElementById('list').childNodes.item(1).textContent = canBeAnswered;

    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "flex";
}

function resetData2() {
    document.getElementById("question").value = "";
    document.getElementById('list').childNodes.item(0).textContent = "";
    document.getElementById('list').childNodes.item(1).textContent = "";

    document.getElementById("section3").style.display = "none";
    document.getElementById("section1").style.display = "flex";
}

function nextToEthical() {
    var dataExist = "Data exist.";
    document.getElementById('list').childNodes.item(2).textContent = dataExist;

    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "flex";
}

function ethicalWarning() {
    document.getElementById("section4").style.display = "none";
    document.getElementById("section4.2").style.display = "flex";
}

function hideEthicalWarning() {
    document.getElementById("section4.2").style.display = "none";
    document.getElementById("section4").style.display = "flex";

}

function nextToYourself() {
    document.getElementById("section6").style.display = "none";
    document.getElementById("section5").style.display = "flex";
}

function nextToResults() {
    document.getElementById("section5").style.display = "none";
    document.getElementById("section5").style.display = "flex";
}

function nextToEthical2() {
    document.getElementById("section5").style.display = "none";
    document.getElementById("section4").style.display = "flex";
}

function nextToInteresting() {
    var ethical = "It is ethical.";
    document.getElementById('list').childNodes.item(3).textContent = ethical;

    document.getElementById("section4").style.display = "none";
    document.getElementById("section6").style.display = "flex";
}

function nextToRightPerson() {
    var interestingData = "Data is interesting.";
    document.getElementById('list').childNodes.item(4).textContent = interestingData;

    document.getElementById("section6").style.display = "none";
    document.getElementById("section8").style.display = "flex";
}

function nextToAskFamily() {
    document.getElementById("section6.2").style.display = "flex";
    document.getElementById("section6").style.display = "none";
}

function hideAskFamily() {
    document.getElementById("section6.2").style.display = "none";
    document.getElementById("section6").style.display = "flex";
}

function nexToCreatePlan() {
    var rightPerson = "You are the right person to tell this story.";
    document.getElementById('list').childNodes.item(5).textContent = rightPerson;

    document.getElementById("section8").style.display = "none";
    document.getElementById("section9").style.display = "flex";
}

function nextToCollaborate() {
    document.getElementById("section8").style.display = "none";
    document.getElementById("section8.2").style.display = "flex";
}

function hideCollaborate() {
    document.getElementById("section8.2").style.display = "none";
    document.getElementById("section8").style.display = "flex";
}

function nextToTryAgain() {
    document.getElementById("section9").style.display = "none";
    document.getElementById("section9.2").style.display = "flex";
}

function hideTryAgain() {
    document.getElementById("section9.2").style.display = "none";
    document.getElementById("section9").style.display = "flex";
}

function nextToMakeTheThing() {
    var interestingStory = "It is an interesting story.";
    document.getElementById('list').childNodes.item(6).textContent = interestingStory;

    document.getElementById("section9").style.display = "none";
    document.getElementById("section10").style.display = "flex";
}

function fixIt() {
    document.getElementById("section10").style.display = "none";
    document.getElementById("section10.2").style.display = "flex";
}

function hideFixIt() {
    document.getElementById("section10.2").style.display = "none";
    document.getElementById("section10").style.display = "flex";
}