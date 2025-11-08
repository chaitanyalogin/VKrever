// =======================
// VKREVER - C NOTES VIEWER
// =======================
//
// This script takes the C notes you shared and turns them into
// a tabbed, scrollable viewer inside the hero section.
//
// You don't have to touch HTML again.
//

// 1. all sections of C notes
const cNotesSections = [
  {
    id: "intro",
    title: "Introduction to C",
    html: `
      <h2>Introduction to C</h2>
      <p>
        The C Programming Language was developed by <strong>Dennis Ritchie</strong> on UNIX around 1972.
        Later, Brian Kernighan and Dennis Ritchie published “The C Programming Language” in 1978.
        Because different vendors made their own C versions, ANSI standardized C in 1983, and that
        is the version most books teach. :contentReference[oaicite:1]{index=1}
      </p>
      <h3>Why C?</h3>
      <ul>
        <li><strong>Industry presence:</strong> used as a systems language and embedded in other tools.</li>
        <li><strong>Middle level:</strong> has features of high-level (loops, functions) + low-level (pointers, bits).</li>
        <li><strong>Portable:</strong> write once, recompile on other OS.</li>
        <li><strong>Flexible & Malleable:</strong> lets you bend rules — powerful but you must know what you’re doing.</li>
        <li><strong>Fast:</strong> compiled, close to hardware.</li>
      </ul>
    `
  },
  {
    id: "charset",
    title: "Character Set",
    html: `
      <h2>Character Set</h2>
      <p>Everything in a C program is built using characters. There are 4 broad groups: :contentReference[oaicite:2]{index=2}</p>
      <ul>
        <li><strong>Alphabets:</strong> A–Z, a–z</li>
        <li><strong>Digits:</strong> 0–9</li>
        <li><strong>Special Characters:</strong> <code>?, &gt;, &lt;, +, -, *, /, (), [], {}</code> etc.</li>
        <li><strong>White Spaces:</strong> space, <code>\\n</code>, <code>\\t</code></li>
      </ul>
    `
  },
  {
    id: "tokens",
    title: "Tokens",
    html: `
      <h2>Tokens in C</h2>
      <p>
        A token is the <strong>smallest individual unit</strong> of a C program. There are 6: :contentReference[oaicite:3]{index=3}
      </p>
      <ol>
        <li><strong>Keywords</strong> – <code>int</code>, <code>float</code>, <code>if</code>, <code>while</code>, <code>for</code>, <code>break</code>, etc.</li>
        <li><strong>Identifiers</strong> – names we create (variables, functions). Rules:
          <ul>
            <li>must start with letter or underscore</li>
            <li>no spaces</li>
            <li>keywords not allowed</li>
            <li>digits allowed after 1st char</li>
          </ul>
        </li>
        <li><strong>Constants</strong> – fixed values</li>
        <li><strong>Strings</strong> – in double quotes <code>"Hello"</code></li>
        <li><strong>Special Symbols</strong> – <code>{ }</code>, <code>[ ]</code></li>
        <li><strong>Operators</strong> – arithmetic, relational, logical, bitwise...</li>
      </ol>
      <h3>Operators (from your notes)</h3>
      <ul>
        <li><strong>Arithmetic:</strong> <code>+ - * / %</code></li>
        <li><strong>Relational:</strong> <code>&lt; &gt; &lt;= &gt;= == !=</code></li>
        <li><strong>Logical:</strong> <code>&amp;&amp;, ||, !</code></li>
        <li><strong>Assignment:</strong> <code>=, +=, -=, *=, /=</code></li>
        <li><strong>Increment/Decrement:</strong> <code>++</code>, <code>--</code></li>
        <li><strong>Bitwise:</strong> <code>&amp;, |, ^, &lt;&lt;, &gt;&gt;</code></li>
        <li><strong>Conditional:</strong> <code>(cond) ? v1 : v2</code></li>
      </ul>
    `
  },
  {
    id: "datatypes",
    title: "Data Types",
    html: `
      <h2>Data Types</h2>
      <p>
        In C you must declare variables before using them. Data type = what kind of data + how much memory. :contentReference[oaicite:4]{index=4}
      </p>
      <h3>Basic / Fundamental</h3>
      <ul>
        <li><strong>int</strong> – whole numbers (2 or 4 bytes)</li>
        <li><strong>float</strong> – 4 bytes, ~6 digits</li>
        <li><strong>double</strong> – 8 bytes, ~14 digits</li>
        <li><strong>char</strong> – 1 byte character</li>
      </ul>
      <h3>Derived</h3>
      <ul>
        <li>Arrays</li>
        <li>Pointers</li>
        <li>Structures</li>
        <li>Enums</li>
      </ul>
      <pre><code>int age;
float salary;
double marks;
char letter = 'A';</code></pre>
    `
  },
  {
    id: "io",
    title: "Input / Output",
    html: `
      <h2>Input / Output Statements</h2>
      <p>
        Your notes explain <code>scanf()</code> for input and <code>printf()</code> for output. :contentReference[oaicite:5]{index=5}
      </p>
      <h3>scanf()</h3>
      <pre><code>int a, b;
scanf("%d%d", &a, &b);</code></pre>
      <p><code>%d</code> for int, <code>%f</code> for float, <code>%c</code> for char, <code>%s</code> for string.</p>
      <h3>printf()</h3>
      <pre><code>printf("Sum = %d", a + b);</code></pre>
    `
  },
  {
    id: "structure",
    title: "C Program Structure",
    html: `
      <h2>C Program Structure</h2>
      <p>A normal C program from your file looks like this: :contentReference[oaicite:6]{index=6}</p>
      <pre><code>#include &lt;stdio.h&gt;   // preprocessor

/* Area of a rectangle */   // comment

int main() {
    int l, b, a;
    printf("Enter length and breadth\\n");
    scanf("%d%d", &l, &b);
    a = l * b;
    printf("Area = %d\\n", a);
    return 0;
}</code></pre>
      <ul>
        <li><strong>Preprocessor</strong> – <code>#include</code></li>
        <li><strong>Comments</strong> – <code>/* ... */</code></li>
        <li><strong>main()</strong> – starting point</li>
        <li><strong>Variable declarations</strong></li>
        <li><strong>Statements</strong></li>
      </ul>
    `
  },
  {
    id: "control",
    title: "Control Statements",
    html: `
      <h2>Control Statements</h2>
      <p>
        Your notes list 3 big control statements: <strong>goto</strong>, <strong>if</strong>, <strong>switch</strong>. We actually prefer <code>if</code> and <code>switch</code> — avoid <code>goto</code> in modern C. :contentReference[oaicite:7]{index=7}
      </p>
      <h3>if / else</h3>
      <pre><code>if (marks &gt;= 35) {
    printf("PASS");
} else {
    printf("FAIL");
}</code></pre>
      <h3>else-if ladder</h3>
      <pre><code>if (per &gt;= 75) grade = 'A';
else if (per &gt;= 60) grade = 'B';
else if (per &gt;= 50) grade = 'C';
else grade = 'F';</code></pre>
      <h3>switch</h3>
      <pre><code>switch(choice) {
  case 1: printf("Add"); break;
  case 2: printf("Sub"); break;
  default: printf("Invalid");
}</code></pre>
    `
  },
  {
    id: "loops",
    title: "Loops",
    html: `
      <h2>Looping Statements</h2>
      <p>
        When you want to repeat something, use loops. Your notes show: <strong>for</strong>, <strong>while</strong>, <strong>do-while</strong>. :contentReference[oaicite:8]{index=8}
      </p>
      <h3>for loop</h3>
      <pre><code>for (i = 1; i &lt;= 10; i++) {
    printf("%d ", i);
}</code></pre>
      <h3>while loop</h3>
      <pre><code>while (x &gt; 0) {
    // ...
}</code></pre>
      <h3>do-while loop</h3>
      <pre><code>do {
    // body
} while (cond);</code></pre>
      <p><code>break</code> exits loop, <code>continue</code> skips current iteration.</p>
    `
  },
  {
    id: "arrays",
    title: "Arrays",
    html: `
      <h2>Arrays</h2>
      <p>
        An array = group of elements of <strong>same type</strong> stored in continuous memory. :contentReference[oaicite:9]{index=9}
      </p>
      <pre><code>int marks[5] = {50, 60, 70, 80, 90};
printf("%d", marks[0]);  // 50
</code></pre>
      <p>Two dimensional:</p>
      <pre><code>int a[3][3];</code></pre>
    `
  },
  {
    id: "strings",
    title: "Strings",
    html: `
      <h2>Strings</h2>
      <p>
        In C, strings are <strong>char arrays</strong> ending with <code>'\\0'</code>. So allocate +1 space. :contentReference[oaicite:10]{index=10}
      </p>
      <pre><code>char name[20] = "Chay";
printf("%s", name);</code></pre>
      <p>Common functions (from <code>&lt;string.h&gt;</code>): <code>strlen</code>, <code>strcpy</code>, <code>strcat</code>, <code>strcmp</code>.</p>
    `
  },
  {
    id: "functions",
    title: "Functions",
    html: `
      <h2>Functions</h2>
      <p>
        Your notes explain top-down design: break big problem into small functions. Every function has
        a return type, name, param list, and body. :contentReference[oaicite:11]{index=11}
      </p>
      <pre><code>int add(int a, int b) {
    return a + b;
}</code></pre>
      <h3>Recursion</h3>
      <pre><code>int fact(int n) {
    if (n &lt;= 1) return 1;
    return n * fact(n - 1);
}</code></pre>
    `
  },
  {
    id: "pointers",
    title: "Pointers",
    html: `
      <h2>Pointers</h2>
      <p>
        Pointer = variable that stores <strong>address</strong> of another variable. Most powerful part of C.
        Your notes cover <code>*</code> (dereference) and <code>&amp;</code> (address-of). :contentReference[oaicite:12]{index=12}
      </p>
      <pre><code>int x = 10;
int *p = &x;
printf("%d", *p);  // 10
</code></pre>
      <p>
        You also have pointer + array relation, pointer arithmetic, call by reference (swapping using pointers),
        and pointer to functions.
      </p>
    `
  },
  {
    id: "structs",
    title: "Structures & Unions",
    html: `
      <h2>Structures & Unions</h2>
      <p>
        Structure = user-defined type that groups related fields. Unions share memory for multiple fields. :contentReference[oaicite:13]{index=13}
      </p>
      <pre><code>struct student {
    int roll;
    char name[30];
    float marks;
};

struct student s1;
s1.roll = 1;
</code></pre>
      <p>Unions use same memory for different types — you use only one at a time.</p>
    `
  },
  {
    id: "fileio",
    title: "File I/O",
    html: `
      <h2>File I/O</h2>
      <p>
        Your notes end with standard file handling using <code>FILE *</code>, <code>fopen</code>, <code>fclose</code>,
        <code>fgetc</code>, <code>fputc</code>, <code>fprintf</code>, <code>fscanf</code>. :contentReference[oaicite:14]{index=14}
      </p>
      <pre><code>FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    printf("Cannot open file");
}
</code></pre>
      <p>Modes: <code>"r"</code>, <code>"w"</code>, <code>"a"</code>, and binary versions <code>"rb"</code>, <code>"wb"</code>.</p>
    `
  }
];

// 2. inject into page
const heroInner = document.querySelector('.hero-inner');

if (heroInner) {
  // create container
  const wrapper = document.createElement('div');
  wrapper.className = 'notes-wrapper';

  // left: tabs
  const tabs = document.createElement('div');
  tabs.className = 'notes-tabs';

  // right: content
  const content = document.createElement('div');
  content.className = 'notes-content';

  // fill tabs
  cNotesSections.forEach((sec, idx) => {
    const btn = document.createElement('button');
    btn.textContent = sec.title;
    btn.className = idx === 0 ? 'notes-tab active' : 'notes-tab';
    btn.dataset.target = sec.id;
    tabs.appendChild(btn);
  });

  // default content
  content.innerHTML = cNotesSections[0].html;

  // assemble
  wrapper.appendChild(tabs);
  wrapper.appendChild(content);
  heroInner.appendChild(wrapper);

  // handle click
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('button.notes-tab');
    if (!btn) return;
    const target = btn.dataset.target;

    // active state
    document.querySelectorAll('.notes-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // find section
    const sec = cNotesSections.find(s => s.id === target);
    if (sec) {
      content.innerHTML = sec.html;
      content.scrollTop = 0;
    }
  });
}
