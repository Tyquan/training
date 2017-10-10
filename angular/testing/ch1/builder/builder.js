var book = {
    id: null,
    author: null,
    dateTime: null
};

/*
 From a testing perspective, we would want the ability to create a valid object, that is, one that has all the fields defined. We may also want to create an invalid object with missing properties, or we may want to set certain values in the object to test the validation logic. Like here dateTime is an actual date time, which should assign by builder object.
*/

// Create a builder function
var BookBuilder = function() {
    // Create a valid object within the builder
    var _resultBook = {
        id: 1,
        author: 'Any Author',
        dateTime: new Date()
    };
    this.build = function() {
        return _resultBook;
    };
    this.setAuthor = function(author) {
        _resultBook.author = author;
        return this;
    };
    this.setDateTime = function(dateTime) {
        _resultBook.dateTime = dateTime;
        return this;
    };
};

// Tests
var validate = function(builtBookToValidate) {
    if (!builtBookToValidate.author) {
        return false;
    }
    if (!builtBookToValidate.dateTime) {
        return false;
    }
    return true;
};

var bookBuilder = new BookBuilder();
var validBook = bookBuilder.setAuthor('Ziaul Haq').setDateTime(new Date()).build();

// Validate the object with validate() method
if (validate(validBook)) {
    console.log('Valid Book created:\n', validBook);
}

console.log('\n');

var invalidBuilder = bookBuilder.setAuthor(null).build();

if (!validate(invalidBuilder)) {
    console.log('Invalid Book created as author is null:\n', invalidBuilder);
}