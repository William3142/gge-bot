const Discord = require('discord.js');

const granary = {
	// [legendary level required, wood, stone, charcoal, olive oil, glass, iron ore, food/hour]
	1: [11, 7899, 12355, 0, 753, 534, 0, 91],
	2: [35, 10419, 14720, 0, 1285, 0, 603, 94],
	3: [48, 12939, 17085, 2481, 0, 0, 1159, 97],
	4: [67, 15459, 19450, 0, 0, 2137, 1714, 100],
	5: [85, 17979, 21815, 0, 2881, 2671, 0, 103],
	6: [93, 20499, 24180, 3999, 0, 0, 2826, 106],
	7: [113, 23019, 26545, 0, 3945, 3739, 0, 109],
	8: [116, 25539, 28910, 5012, 0, 0, 3938, 112],
	9: [130, 28059, 31257, 5518, 0, 4808, 0, 115],
	10: [160, 30579, 33640, 0, 5541, 5342, 0, 118],
	11: [183, 33099, 36005, 0, 0, 7345, 7006, 121],
	12: [203, 35619, 38370, 8796, 0, 8013, 0, 124],
	13: [216, 38139, 40735, 0, 8921, 0, 8396, 127],
	14: [230, 40659, 43100, 0, 0, 9349, 9091, 130],
	15: [244, 43179, 45465, 10694, 0, 10016, 0, 133],
	16: [264, 45699, 47830, , 10916, , 10480, 136],
	17: [277, 48219, 50195, 0, 0, 11352, 11175, 139],
	18: [291, 50739, 52560, 12592, 0, 0, 11870, 142],
	19: [311, 53259, 54925, 13225, 12911, 0, 0, 145],
	20: [324, 55779, 57290, 0, 13576, 0, 13259, 148],
	21: [337, 58299, 59655, 19320, 0, 0, 18605, 151],
	22: [357, 60819, 62020, 0, 19874, 19587, 0, 154],
	23: [371, 63339, 64385, 21008, 0, 0, 20458, 157],
	24: [384, 65859, 66750, 0, 21648, 0, 21384, 160],
	25: [404, 68379, 69115, 22695, 22534, 0, 0, 163],
	26: [418, 70899, 71480, 0, 23421, 23149, 0, 166],
	27: [432, 73419, 73845, 0, 24308, 0, 24163, 169],
	28: [463, 75939, 76210, 25226, 25194, 0, 0, 172],
	29: [479, "?", "?", "?", "?", "?", "?", 175],
	30: [495, 80979, 80940, 26913, 0, 0, 26942, 178]
}

module.exports = {
	name: 'granary',
	description: 'This command tells you the stats of granaries at each level.',
	execute(message, args) {
		try {
			var level = parseInt(args[0]);
		} catch (err) {
			return message.channel.send(`The Granary is a civil building that produces a lot of food. It is first unlocked at legendary level 11 and produces 91 food per hour. It serves the same purpose as a farmhouse, with the difference in increased production.`);
		}

		console.log(args.length);
		console.log(level);

		if ( args.length && !(isNaN(level)) ) {
			var embed;

			if (level < 1 || level > 30) {
				return message.channel.send('Please provide a valid granary level (1 - 30).');
			} else {
				embed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle(`Level ${level} Granary`)
				.setDescription('The Granary is a civil building that produces a lot of food. It is first unlocked at legendary level 11 and produces 91 food per hour. It serves the same purpose as a farmhouse, with the difference in increased production.')
				.setThumbnail('https://i.ibb.co/ySttFhd/Granary.png')
				.addFields(
					{ name: 'Legendary level required', value: granary[level][0] },
					{ name: 'Resources required', value: `Wood: ${granary[level][1]} \nStone: ${granary[level][2]} \nCharcoal: ${granary[level][3]} \nOlive Oil: ${granary[level][4]} \nGlass: ${granary[level][5]} \nIron Ore: ${granary[level][6]} \n` },
					{ name: 'Food production per hour', value: granary[level][7] }
				)
			}

			return message.channel.send(embed);
		} else if ( (!args.length) || (isNaN(level)) ){
			return message.channel.send(`The Granary is a civil building that produces a lot of food. It is first unlocked at legendary level 11 and produces 91 food per hour. It serves the same purpose as a farmhouse, with the difference in increased production.`);
		}
	},
};