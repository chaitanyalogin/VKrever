// =======================
// VKREVER C Notes Script
// =======================

// Your C notes content in a variable (shortened for readability — you can paste more if needed)
const cNotes = `
<h2>Introduction to C</h2>
<p>
The C Programming Language was initially developed by Denis Ritchie using a Unix system in 1972.
By the early 80's many versions of C were available which were inconsistent with each other in many aspects.
This led to the ANSI standard in 1983.
</p>

<h3>Features</h3>
<ul>
  <li>Industry Presence: One of the most widely used languages.</li>
  <li>Middle Level: Combines high- and low-level language features.</li>
  <li>Portability, Flexibility, Malleability, Speed.</li>
</ul>

<h3>Tokens</h3>
<p>A smallest individual part of a program is called token. Types of tokens:</p>
<ul>
  <li>Keywords</li>
  <li>Identifiers</li>
  <li>Constants</li>
  <li>Strings</li>
  <li>Special Symbols</li>
  <li>Operators</li>
</ul>

<h3>Sample Program</h3>
<pre>
#include &lt;stdio.h&gt;
/* Area of a rectangle */
main() {
    int a,l,b;
    printf("Enter Length and Breadth\\n");
    scanf("%d%d",&l,&b);
    a=l*b;
    printf("Area=%d\\n",a);
}
</pre>

<p><strong>Note:</strong> For full C notes — this section can be expanded or scrolled.</p>
`;

// Select the hero section (right panel)
const heroInner = document.querySelector('.hero-inner');

// Create a new div container for notes
const notesContainer = document.createElement('div');
notesContainer.className = 'notes-container';
notesContainer.innerHTML = cNotes;

// Append the notes to hero
heroInner.appendChild(notesContainer);
