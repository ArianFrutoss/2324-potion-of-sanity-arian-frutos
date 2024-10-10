const positive_effect_tokens = ['Fortify', 'Resist', 'Cure', 'Restore', 'Regenerate', 'Invisibility', 'Waterbreathing'];

class Effect{

    constructor (name, type){

        name = this.name;
        type = this.type;
    }

    static from (name){

        return new Effect(

            name,
            positive_effect_tokens.some(token => name.includes(token)) ? 'beneficial' : 'harmful'
        )
    }
}