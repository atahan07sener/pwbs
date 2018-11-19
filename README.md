## Programming of Web-based Systems

This is an assignment project assigned in the Programming of Web-based Systems course.

You can reach the website at: http://atahan07sener.github.io/pwbs

## TODO List

### 5th Assignment

- [x] External javascript embedding
- [x] Changing HTML on the website (innerHTML)
- [x] Outputting into console

5 functions showing knowledge of Javascript syntax with at least: loops, conditional statements, arrays, Strings, modifying HTML, samples:

- - [x] Input: array of Strings, output: String description: concat Strings on input and change to upper case,
- - [x] Input: String className, String newHTML, output: none, description: change HTML in all alements with given class
- - [x] Input: String fieldID1, String fieldID2, String fieldID3, Output: none, Description: takes a number from the input field with fieldID1 and fieldID2, and outputs the result of multiplication to fieldID3
- - [x] Input: String fieldID, Array of Strings: headers, Output: none, Description: changes the table with fieldID, changing header section texts into the one given in "headers" variable with maximum length defined in global variable
- - [x] Input: fieldID, Output: none, Description: prompt a user for a name, than puts this name into element with fieldID.

- [x] All functions should be fired when clicking on button or on page load or in other chosen simple events (advanced events on next lab)
- [x] All functions should be in one file, only simple JS code can be embedded into HTML (like executing a function)


### 6th Assignment

- [ ] Embedding any framework for DOM manipulation (jQuery, Angular, React, Ember) or using pure javascript

Implementation of at least 5 functions which modify HTML structure. Functions should be connected to fullfil some user requirement. Sample: let's assume a form in which people add invoice data. Sample functions:

- - [ ] Add new product - will add new invoice line with inputs: product name, quantity, net price, vat
- - [ ] Calculate gross amount - will calculate gross amount for given product/invoice line and will insert this amount to gross price column
- - [ ] Calculate sum - will calculate sum of gross and net prices and put them in summarize section
- - [ ] Delete line - will delete invoice line
- - [ ] Convert to float - will convert given field value to float with dot

Implementation of needed events to fulfil functionality. Events number and attachment should make website ready to use for user (in terms of front-end). Sample events and attachment:
- - [ ] On click on button "add product" -> Add new product
- - [ ] On change of any number fields in invoice lines section -> calculate gross amount (for this line) and calculate sum
- - [ ] On click "delete line" -> Delete line
- - [ ] On input on any number fields -> Convert to float

Remember:

- - [ ] All functions should have proper input and output
- - [ ] Events callbacks should have only references to function - no writing a whole code in events callbacks section
- - [ ] Events should be attached to certain fields with care - not more and not less than needed
- - [ ] In some frameworks adding new HTML code will force you to attach events to newly added fields once again

You should make your own simple javascript application PLEASE DO NOT USE SAMPLE it's just a guidance.

ample applications you can think of:
- - [ ] Any calculator: tax calculator, cost for materials, cost for services counted by some formulas etc.
- - [ ] Simple task manager
- - [ ] Costs shared between roommates

Do not use framework in this lab!