/**
 * 
 */

const screen = document.getElementById('screen');

   const jokeContainer= document.getElementById('joke-container');

   const jokes = [
     "Why don't skeletons fight each other? They don't have the guts!",
     "Why did the scarecrow win an award? He was outstanding in his field!",
     "I'm reading a book on anti-gravity. It's impossible to put down!",
     "Why do bees have sticky hair? Because they use honeycombs!",
     "Why don't programmers like nature? It has too many bugs!",
     "Why was the math book sad? It had too many problems.",
     "Why did the computer go to the doctor? It caught a virus!",
     "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else.",
     "Parallel lines have so much in common. It’s a shame they’ll never meet!",
     "I told my calculator a joke... it couldn't divide by zero!",
     "Why was the fraction nervous about marrying the decimal? Because he would have to convert.",
     "What did the 0 say to the 8? Nice belt!",
     "Why did the student eat his homework? Because his teacher said it was a piece of cake!",
     "Why can't you trust an atom? Because they make up everything!",
     "How do you organize a space party? You planet.",
     "Why don’t eggs tell jokes? They might crack up.",
     "Why did the tomato turn red? Because it saw the salad dressing!",
     "What do you call fake spaghetti? An impasta!",
     "What happens when you cross a snowman with a vampire? Frostbite!",
     "Why are skeletons so calm? Because nothing gets under their skin.",
     "Why do cows have hooves instead of feet? Because they lactose.",
     "Why can’t your nose be 12 inches long? Because then it would be a foot!",
     "What do you call cheese that isn’t yours? Nacho cheese!",
     "Why did the coffee file a police report? It got mugged!",
     "Why did the bicycle fall over? Because it was two-tired.",
     "What do you call a bear with no teeth? A gummy bear!",
     "Why was the broom late? It swept in!",
     "What’s orange and sounds like a parrot? A carrot!",
     "Why did the chicken go to the seance? To talk to the other side!",
     "What’s a computer’s favorite beat? An algorithm!"
   ];
   function clearScreen() {
     screen.textContent = '0';
     jokeContainer.textContent = '';
   }

   function appendValue(value) {
     if (screen.textContent === '0') {
       screen.textContent = value;
     } else {
       screen.textContent += value;
     }
   }

   function calculateResult() {
     try {
   	  const result = eval(screen.textContent);
         screen.textContent = result;
         const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
         jokeContainer.textContent = randomJoke;
     } catch {
       screen.textContent = 'Error';
       jokeContainer.textContent = "Oops! Let's try that again!";
     }
   }
   
   
   // Keyboard Input Handling
   document.addEventListener('keydown', (event) => {
     const allowedKeys = '0123456789+-*/().';
     if (allowedKeys.includes(event.key)) {
       appendValue(event.key);
     } else if (event.key === 'Enter') {
       calculateResult();
     } else if (event.key === 'Backspace') {
       screen.textContent = screen.textContent.slice(0, -1) || '0';
     } else if (event.key === 'Escape') {
       clearScreen();
     }
   });