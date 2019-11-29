/** 
 * In this example, we are gona make an object called teams.
 * In that object, we will have a function called "sumary".
 * This function must return an array with values like:
 * "Jane is in the team Wololo"
 */

 const team = {
     members: ['Seba', 'Diego', 'Jaci'],
     teamName: 'Wololo',
    // In above example:
    // this === team
     teamSummary: function() {
        return this.members.map( member => `${member} is in the team ${this.teamName}`)
    }
 }

 console.log(team.teamSummary());