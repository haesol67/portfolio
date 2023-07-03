'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 150,    
}) //Web Publisher
.move(-13)
.type('Amazing ') //Amazing Web Publisher
.move(null, { to: 'END'})
.pause(1000)
.go();