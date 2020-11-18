import {Engine} from 'excalibur'
import {IntroCredits} from './scenes/IntroCredits/IntroCredits'
import {IntroMenu} from './scenes/IntroMenu/IntroMenu'

const Game = new Engine({
    // Set the screen viewport on the DOM
    viewport: {
        width: 500,
        height: 500
    },
    // Set the logical resolution. This is the resolution we will be working with internally
    resolution: {
        width: 100,
        height: 100
    }
})

Game.add('intro-credits', new IntroCredits(Game))
Game.add('into-menu', new IntroMenu(Game))

Game.start().then(() => {
    Game.goToScene('intro-credits')

    console.log('noot')
})