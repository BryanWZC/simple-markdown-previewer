# Simple Markdown Previewer
\
A [previewer] that converts Markdown to HTML.
&nbsp;
## Markdown Syntax  
&nbsp;
Here is a quick reference for the Markdown syntax. Find more on John Gruber's [website].  
&nbsp;
### Basic Formatting
&nbsp;
General purpose:
1. **Bold** `**TEXT**`
2.*Emphasized* `*TEXT*`
3.~~Strikethrough~~ `~~TEXT~~`
4.Horizontal line rules (see below) `---` or `***` or `___`

---
&nbsp;
### Headings
&nbsp;
Use `#` at the beginning as shown below.
1. # H1 `# h1`
2. ## H2 `## h2`
3. ### H3 `### h3`
&nbsp;

### Links
&nbsp;
Link designations can be broken down into inline and Reference as shown below:
1. Inline - `[TEXT](URL)`
2. Inline with title - `[TEXT](URL TITLE)`
3. Reference with `[TEXT IN PARAGRAPH]` embedded in a word and designating the link elsewhere(preferably below) as `[TEXT FROM PARAGRAPH]: URL`
&nbsp;

### Images
&nbsp;
Images can also be designated similar to links as shown below:
1. Full URL - `![alt text](URL)`
2. Reference style - `![alt text][TEXT]` and `[TEXT]: URL` somewhere else(preferably below)
&nbsp;

### Lists
&nbsp;
There are ordered and unordered list as shown below:
1. Ordered List 

```
 1. ITEM
 1. ANOTHER ITEM
  1. NEXT LEVEL ITEM
   1. NEXT NEXT LEVEL ITEM
  1. NEXT LEVEL ITEM
```
2. Unordered List - uses same logic but with `*` instead
&nbsp;

### Code and syntax highlighting
&nbsp; 
There are inline and code blocks as shown below:
1. Inline - `` `TEXT` ``
2. Code blocks - Encase `TEXT` within `` ``` ``
&nbsp; 

### Blockquotes
&nbsp; 
Use `>` for blockquotes
&nbsp; 
&nbsp; 
&nbsp; 

[previewer]: https://bryanwzc.github.io/simple-markdown-previewer/
[website]: https://daringfireball.net/projects/markdown/syntax