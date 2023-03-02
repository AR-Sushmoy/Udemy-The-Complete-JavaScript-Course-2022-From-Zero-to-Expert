'use strict';

//////////////////////////////////////////
///////// PROJECT #2_ Modal Window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
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

    // So, what we want to do is take the modal. So this element (document.querySelector('.modal');) that we selected here previously. So we selected it, then stored it into this variable and named it modal At Line 06. And now we take that selected element and on there we can read the class list property And this class list property itself has a couple of methods.

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

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// so now, this variable here closeModal is what holds the function value.

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// notice that we are not calling the function. We are not doing this --> closeModal() .This would not work at all, because it will immediately called a function, as soon as JavaScript executes this line.

//But that's not what we want to happen. We want the closeModal function to be executed only as soon as the click event happens on the closeModal button.

// In Line: 81 & 83, That's so much better than what we had before. Not only did we make our code more DRY. But we also made it more readable. More expressive, and more declarative. So right now, when we read this code here, it's a lot easier to understand.
