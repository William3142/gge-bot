const Discord = require('discord.js');

const stoneworks = {
	// [legendary level required, wood, stone, charcoal, olive oil, glass, iron ore, stone/hour]
	1: [8, 56935, 50945, 13347, 0, 2671, 0, 70],
	2: [31, 57760, 51970, 15668, 6371, 0, 0, 72],
	3: [44, 58585, 52995, 0, 9020, 8013, 0, 74],
	4: [64, 59410, 54020, 0, 11659, 0, 2584, 76],
	5: [77, 60235, 55045, 22631, 14298, 0, 0, 78],
	6: [90, 61060, 56070, 0, 16937, 0, 8562, 80],
	7: [110, 61885, 57095, 27273, 0, 18697, 0, 82],
	8: [126, 62710, 58120, 0, 22215, 21368, 0, 84],
	9: [140, 63535, 59145, 31915, 4854, 0, 0, 86],
	10: [156, 64360, 60170, 34236, 0, 0, 20518, 88],
	11: [180, 65185, 61195, 0, 30132, 29381, 0, 90],
	12: [193, 66010, 62220, 38878, 0, 0, 26496, 92],
	13: [213, 66835, 63245, 41199, 35410, 0, 0, 94],
	14: [226, 67660, 64270, 0, 38049, 0, 32474, 96],
	15: [240, 68485, 65295, 45841, 0, 0, 35463, 98],
	16: [261, 69310, 66320, 0, 0, 42736, 38452, 100],
	17: [274, 70135, 67345, 0, 45966, 45407, 0, 102],
	18: [287, 70960, 68370, 0, 48605, 0, 0, 104],
	19: [307, 71785, 69395, 0, 51244, 50749, 0, 106],
	20: [321, 72610, 70420, 57446, 0, 0, 0, 108],
	21: [334, 73435, 71445, 0, 56522, 56091, 0, 110],
	22: [],
	23: [371, 63339, 64385, 21008, 0, 0, 20458, 157],
	24: [384, 65859, 66750, 0, 21648, 0, 21384, 160],
	25: [404, 68379, 69115, 22695, 22534, 0, 0, 163],
	26: [418, 70899, 71480, 0, 23421, 23149, 0, 166],
	27: [432, 73419, 73845, 0, 24308, 0, 24163, 169],
	28: [463, 75939, 76210, 25226, 25194, 0, 0, 172],
	29: [479],
	30: [495, 80979, 80940, 26913, 0, 0, 26942, 178]
}

module.exports = {
	name: 'stoneworks',
	description: 'This command tells you the stats of stone works at each level.',
	execute(message, args) {
		const level = parseInt(args[0]);

		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`Level ${level} Stone Works`)
			.setDescription('The Stone Works is a civil building that produces a lot of food. It is first unlocked at legendary level 8 and produces 70 stone per hour. It serves the same purpose as a stone quarry, with the difference in increased production.')
			.setThumbnail('https://i.ibb.co/P1NSg5S/Screenshot-307.png')
			.addFields(
				{ name: 'Legendary level required', value: stoneworks[level][0] },
				{ name: 'Resources required', value: `Wood: ${stoneworks[level][1]} \nStone: ${stoneworks[level][2]} \nCharcoal: ${stoneworks[level][3]} \nOlive Oil: ${stoneworks[level][4]} \nGlass: ${stoneworks[level][5]} \nIron Ore: ${stoneworks[level][6]} \n` },
				{ name: 'Stone production per hour', value: stoneworks[level][7] }
			)

		if ((!args.length) || (isNaN(level))){
			return message.channel.send('The Stone Works is a civil building that produces a lot of food. It is first unlocked at legendary level 8 and produces 70 stone per hour. It serves the same purpose as a stone quarry, with the difference in increased production.');
		}
		else {
			return message.channel.send(embed);
		}
	},
};