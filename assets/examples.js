function example(ex){
    switch(ex){
        case 1:
            function area(r){
                return Math.PI*r*r; // area of a circle with radius r
            }

            area = overload(area, ['Number', 'Number'], function(l, w){
                return l*w; // area of a rectangle given length + width
            });

            alert('area(2) = ' + area(2));          // returns 4*pi
            alert('area(3, 4) = ' + area(3, 4));    // returns 12
            break;
        case 2:
            function Kitten(name){    // class definition
                this.name = name;
                this.ears = 2;
            }
            Kitten.prototype.meow = function(message){ // meows a message to the world
                alert(this.name + ' meows: "' + message + '"');
            };
            Kitten.prototype.meow = overload(Kitten.prototype.meow,
                ['String || Number', 'Kitten'],
                function(message, kitten){ // meows a message to another kitten
                    alert(this.name + ' meows: "' + message + '" to ' + kitten.name);
                });

            var kisky = new Kitten('Kisky');
            var beatrice = new Kitten('Beatrice');
            kisky.meow('Hello world!');
            beatrice.meow('Hello there!', kisky);
            break;
        case 3:
            // Overload document.createElement to accept an extra 'attributes' argument
            document.createElement = overload(document.createElement,
                ['String', 'Object'],
                function(tag, attributes){
                    var el = document.createElement(tag);
                    for(var attr in attributes) el.setAttribute(attr, attributes[attr]);
                    return el;
                });

            // Overload alert() to create non-intrusive notifications
            alert = overload(alert, ['*'], // <- '*' is a wildcard, meaning any type can be passed to the function
                function(message){
                    // Use the newly overloaded createElement method
                    var notification = document.createElement('div', {'class': 'alert'});
                    notification.innerHTML = message;
                    document.getElementById('alerts').appendChild(notification);

                    setTimeout(function(){
                        document.getElementById('alerts').removeChild(notification)
                    }, 5000);
                });

            alert('Hello world!');
            break;
        case 4:
            // Overload Math.sqrt to take the root of negative numbers and return a string
            Math.sqrt = overload(Math.sqrt,
                [function(arg){ return (arg < 0) }],    // only overload for when x < 0
                function(x){
                    return Math.sqrt(-x) + 'i';
                });

            alert('sqrt(4) = ' + Math.sqrt(4));    // '2'
            alert('sqrt(-4) = ' + Math.sqrt(-4));  // '2i'
            break;
    }
}