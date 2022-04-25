import kick from "./../assets/sounds/kick.wav";
export const samples = [
	{
		name: "Kick",
		sound: kick,
		button: "A",
	},
	{
		name: "Snare",
		sound: require("./../assets/sounds/snare.wav"),
		button: "S",
	},
	{
		name: "Clap",
		sound: require("./../assets/sounds/clap.wav"),
		button: "D",
	},
	{
		name: "Rim",
		sound: require("./../assets/sounds/rim.wav"),
		button: "F",
	},
	{
		name: "Closed Hi-Hat",
		sound: require("./../assets/sounds/closed-hat.wav"),
		button: "G",
	},
	{
		name: "Open Hi-Hat",
		sound: require("./../assets/sounds/open-hat.wav"),
		button: "H",
	},
	{
		name: "Percussion",
		sound: require("./../assets/sounds/perc.wav"),
		button: "J",
	},
	{
		name: "Tom",
		sound: require("./../assets/sounds/tom.wav"),
		button: "K",
	},
];

export default samples;
