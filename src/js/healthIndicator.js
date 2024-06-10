export default function healthIndicator(person) {
    let result = false;

    if(!typeof person !== 'object' && !person.hasOwnProperty('health')) {
        return result;
    }

    if(person.health > 50) {
        result = 'healthy';
    }

    if(person.health <= 50 && person.health > 15) {
        result = 'wounded';
    }

    if(person.health <= 15) {
        result = 'critical';
    }

    return result;
}