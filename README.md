ChatGPT said:

Below is a complete README.md file for your Color Guessing Game, fully written based on the features in your JavaScript code.

If you want, I can also create badges, screenshots section, or a more advanced layout.

🎨 Color Guessing Game

A fun and interactive color-matching challenge where you test your ability to identify the correct RGB color from a set of colored boxes. Your streak, best streak, and lives determine how far you can go — with Easy and Hard modes for different skill levels!

🌟 Game Features (Based on Your Code)
👤 User Personalization

Prompts the user for their name on page load

Displays the username dynamically in the UI

🎮 Core Gameplay

Game generates random RGB colors

One of them is the correct color displayed as text

Player must click the box that matches the given RGB value

New colors are generated every round

3 Lives system — lose all lives and the round ends

📈 Streak System

🔥 Current Streak: Increases with every correct guess

🏆 Best Streak: Saved using localStorage

Updates in real time

“First Win!” message for the first correct guess

Streak! 🤩 message appears when streak ≥ 3

Streak text turns green on good performance

✨ UI Effects & Animations

🟩 Correct guess:

Box gets a glowing yellow border for 1 second

“Correct!” message appears

🟥 Wrong guess:

Box shakes with a custom shake animation

“Try Again ❌” message appears

🌟 Header text becomes bold when player sets a new best streak

🎯 Easy Mode button turns green when selected

🔥 Hard Mode button turns red when selected

Lives appear/disappear based on mistakes

❤️ Lives System

Player starts every round with 3 lives

Each wrong guess removes a life

When all 3 are gone:

“❌ You Lost” appears

All color boxes become unclickable

🧠 Difficulty Modes
Easy Mode

Only 3 color choices

Easy button turns light green

Streak resets when switching mode

Hard Mode

6 color choices

Hard button turns red

Streak resets when switching mode

🛠 Controls & Buttons

▶️ New Round — Resets colors and continues

🔄 Reset Best Streak — Clears localStorage

🟩 Easy Mode

🔴 Hard Mode

📌 How the Game Works (Logic Summary)

Random RGB colors are generated using randomRGB()

One color is chosen as the correct answer

Player guesses by clicking the colored boxes

Correct guess → increases streak

Wrong guess → removes a life

Streak + High Streak are managed with localStorage

UI updates dynamically (colors, text, visibility, animations)
