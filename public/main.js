// using server sent events

var eventList = document.querySelector("#list")
var evtSource = new EventSource("/event_source")

var receiveGesture = function(e) {
  var newElement = document.createElement("li")

  newElement.innerHTML = "GESTURE RECEIVED - Taking you home"
  eventList.appendChild(newElement)
}

var main = function() {
  evtSource.addEventListener("onmessage", receiveGesture)
}

main()

// // idiomatic code - ruby (opal)
//
// include RubyLibs
//
// @@event_list = q "#list"
// @@event_source = EventSource.new "/event_source"
//
// receive_gesture = lambda do
//   new_element = dom.createElement "li"
//   @@event_list.append new_element
// end
//
// initialize = lambda do
//   @@event_source.add_listener "onmessage", receive_gesture
// end
//
// # Self.new
// initialize()
//
// // ruby libs
//
// module RubyLibs
//   dom = document
//
//   q = dom.querySelector
//   q.append = q.appendChild
// end
//
// Object.add_listener = Object.addEventListener



