'use strict';

/**@type {{[k: string]: ModdedAbilityData}} */
let BattleAbilities = {
		"psychocall": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Psychic-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Psychic attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Psychic' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Psycho Call boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Psychic' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Psycho Call boost');
				return this.chainModify(1.5);
			}
		},
		id: "psychocall",
		name: "Psycho Call",
		rating: 2,
		num: 430,
	},
	"spiritcall": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Ghost-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Ghost attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Ghost' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Spirit Call boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Ghost' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Spirit Call boost');
				return this.chainModify(1.5);
			}
		},
		id: "spiritcall",
		name: "Spirit Call",
		rating: 2,
		num: 431,
	},
	"shadowcall": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Dark-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Dark attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Dark' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Shadow Call boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Dark' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Shadow Call boost');
				return this.chainModify(1.5);
			}
		},
		id: "shadowcall",
		name: "Shadow Call",
		rating: 2,
		num: 432,
	},
	"icecleats": {
		shortDesc: "If hail is active, this Pokemon's Speed is doubled.",
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather('hail')) {
				return this.chainModify(2);
			}
		},
		id: "icecleats",
		name: "Ice Cleats",
		rating: 3,
		num: 433,
	},
};

exports.BattleAbilities = BattleAbilities;
