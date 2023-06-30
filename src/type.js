'use strict';

new TypeIt('.home__title--strong') //Web Publisher
.move(-13)
.type('Amazing ') //Amazing Web Publisher
.move(null, { to: 'END'})
.delete()
.go();