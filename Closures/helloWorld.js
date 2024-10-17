// Write a function createHelloWorld. It should return a new function that always returns "Hello World".


/**
 * @return {Function}
 */
var createHelloWorld = function() {
    var word = "Hello World"
    return function(...args) {
        return word
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */