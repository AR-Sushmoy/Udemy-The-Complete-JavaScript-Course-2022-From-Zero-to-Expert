'use strict';

//////////////////////////////////////////
///////// PROJECT #2_ Modal Window
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
*/
// If we use this .querySelectorAll() it selects all the elements associate with the class name show-modal and it basically creates a list or array of these elements.
/*
console.log(btnShowModal); // Output: NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
*/
/*
// Now to retrieve all the elements inside the list we simply run a loop.
for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);
}
// Output:
// Show modal 1
// Show modal 2
// Show modal 3
*/
// Using this for loop we can do something with all of the three show-modal buttons.

//////////////////////////////////////////
///////// Working With Classes

/*
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    // Here, we are just defining the function. We are not calling it itself. It is the JavaScript engine who will call this function as soon as the click event happens on exactly this element. the function is a value itself.

    // After we attach the addEventListener() method to btnShowModal array now each of these three buttons here has their own event handler function attached to it.

    // Now let's remove the hidden class.

    // So, what we want to do is take the modal. So this element (document.querySelector('.modal');) that we selected here previously. So we selected it, then stored it inside this variable modal At Line 06. And now we take that selected element and on there we can read the class list property And this class list property itself has a couple of methods.

    // And the one we are gonna use now is remove() . The class that we are gonna remove is the class called "hidden" .

    // Just keep in mind that DO NOT use the dot here. So not like this --> remove('.hidden') .

    // So the dot is only for the class selector. But here we are not anymore selecting anything. We're just passing in the name of the class. And so all we need is a string with that name.

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // using classes like this is a really, really and handy way of manipulating webpages. And in practice adding and removing classes, like we just did here, is the main way in which we change styles on websites.

    // So, usually when you need to manipulate styles on a page, then always just export the styles into a class, and then use the class just like we did here using the hidden class.
  });
}

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/

// However, we do not want the same code here in btnCloseModal and overlay. We want actually the exact same function to be executed in both of these places, no matter if we click the on the close button or if we click on the overlay. So, how should we do that? We can simply export this function into a more real named function.
/*
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
*/
// so now, this variable here closeModal is what holds the function value.
/*
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
*/
// notice that we are not calling the function. We are not doing this --> closeModal() .This would not work at all, because it will immediately called a function, as soon as JavaScript executes this line.

//But that's not what we want to happen. We want the closeModal function to be executed only as soon as the click event happens on the closeModal button.

// In Line: 81 & 83, That's so much better than what we had before. Not only did we make our code more DRY. But we also made it more readable. More expressive, and more declarative. So right now, when we read this code here, it's a lot easier to understand.

//////////////////////////////////////////
///////// Handling an _Esc_ Keypress Event

// How to responde to Keyboard events? such as, when we press the ESC key on our keyboard the modal window will close.

// So, in order to listen for keyboard events we still need to use add event listener.

// Because the keypress event is simply just another type of event.

// Now, Keyboard events are so called global events because they do not happen on one specific event. And, for global events like keyboard events we usually listen on the whole document.

// By using addEventListener here on the document we are listening for events everywhere. So, no mater where they happen on the page they will always trigger the event handler that we are gonna specify here.

// Now, about the name of the event itself there are three types of event for the keyboard. i) keydown, ii) keypress and iii) keyup

// keyup only happens when we lift our finger off the key

// keypress is fired continuously as we keep our finger on a certain key

// keydown is fired as soon as we press down the key. And usually this is the one that we use.

/*
document.addEventListener('keydown', function () {
  // this function() here will be executed for any key press that happens.
  console.log('A key was pressed'); //Output: A key was pressed
});
*/

// However we only want to close the pop-up window when the ESC key was pressed.

// How will we know which key was pressed if the event here happens for all the keys?

// Well, the information about which key was pressed will be stored in the event that is going to occure as soon as any key is pressed.

// So remember as we hit any key on our keyboard a keydown event is generated and our handler function is waiting for that to happen.

// And any time an event like this occures javaScript does in fact generates an object and that object contains all the information about the event itself and we can then actually access the object in the event handler function.

// Now up until this point we never looked at the event. We only just listend for it and then reacted to it.

// But this time we actually need to look at the event object in order to figure out which key was pressed.

// how can we do that? well, what we need to do is to give this function() here a parameter. let's call it e which stands for event. But we could give it any name it doesn't matter.

/*
document.addEventListener('keydown', function (e) {
  //
});
*/

// So, then as the event occures javaScript will call this function with the event object as an argument. And this happens because we do not call this function by ourselves.

// We do not call the function, We only define it here. So we say hey, javaScript call this function() when a keydown event happens and when you do so please pass in the object as an argument.

/*
document.addEventListener('keydown', function (e) {
  console.log(e); // if we press the enter key. output: KeyboardEvent {isTrusted: true, key: "Enter", code: "Enter" and so on.....}
  // It's just an object that is created by JavaScript.
});
*/

// So, that's great because when we press any key now we can see which key we just pressed.

// if we look closely inside the object We can see that we get the information from the key property in the object.

// So, let's log the key property in the console

/*
document.addEventListener('keydown', function (e) {
  console.log(e.key); // now if we press the escape key we get output: Escape
});
*/

// Great, now that we know which key was actually pressed we can use that information to close the modal window whenever the escape key is pressed.

// We only want to close the modal when the modal is actually visible. And, How do we know if the modal is currently visible?

// well, if the modal contains class hidden it means that it's not visible and when it does not contain the class hidden it means it's visible then that's the condition in which we want to close it.

// Now, from the previous lecture [Working With Classes] we learned about classList property and its methods remove() and add().

// We can also check if an element contains a class.
/*
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // Condition explanation: if the key we pressed is Escape and if modal does not contains the class hidden then execute rest of the code.
    closeModal(); // this function has the code to remove the hidden both for the modal window and the overlay.
  }
});
*/

///// Final Program:

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    // modal.classList.remove('hidden');
    // overlay.classList.remove('hidden');
    openModalAndOverlay();
  });
}

btnCloseModal.addEventListener('click', function () {
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
  closeModalAndOverlay();
});

overlay.addEventListener('click', function () {
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
  closeModalAndOverlay();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
    closeModalAndOverlay();
  }
});

// above here in our code we did not followed the DRY principle. So, Let's implement that into our program.

function closeModalAndOverlay() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModalAndOverlay() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
