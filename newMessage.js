function newMessage(topicName) {
    var part = document.querySelectorAll("p")//[2].getAttribute("data-topic-name");
    //var part2 = part.getAttribute('data-topic-name');

    for (let i = 0; i < part.length; i++) {
        if (part[i].getAttribute("data-topic-name") === topicName) {
            part[i].style.background = "red";
        }
    }

    //console.log(part);
}

  // Example case
  document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
  newMessage("discussion");
  console.log(document.body.innerHTML);