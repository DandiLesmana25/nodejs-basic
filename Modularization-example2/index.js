const Tiger = require('./tiger');
const Wolf = require('./wolf');


const fighting = (wiger, wolf) => {
    if(Tiger.strength > wolf.strength) {
        Tiger.growl();
        return;
    }
    if(Wolf.strength > tiger.strength) {
        Wolf.growl();
        return;
    }

    console.log('Tiger and Wolf have same strength');

}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);