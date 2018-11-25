## Programming of Web-based Systems

This is an assignment project assigned in the Programming of Web-based Systems course.

You can reach the website at: http://atahan07sener.github.io/pwbs

## TODO List

### 6th Assignment

- [x] Embedding any framework for DOM manipulation (jQuery, Angular, React, Ember) or using pure javascript

Implementation of at least 5 functions which modify HTML structure. Functions should be connected to fullfil some user requirement. Sample: let's assume a form in which people add invoice data. Sample functions:

- - [x] Add new product - will add new invoice line with inputs: product name, quantity, net price, vat
- - [x] Calculate gross amount - will calculate gross amount for given product/invoice line and will insert this amount to gross price column
- - [x] Calculate sum - will calculate sum of gross and net prices and put them in summarize section
- - [x] Delete line - will delete invoice line
- - [ ] Convert to float - will convert given field value to float with dot

Implementation of needed events to fulfil functionality. Events number and attachment should make website ready to use for user (in terms of front-end). Sample events and attachment:
- - [ ] On click on button "add product" -> Add new product
- - [ ] On change of any number fields in invoice lines section -> calculate gross amount (for this line) and calculate sum
- - [x] On click "delete line" -> Delete line
- - [ ] On input on any number fields -> Convert to float