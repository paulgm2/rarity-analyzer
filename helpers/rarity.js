// computed rarity in JSON file
let rarity = require("../data/rarity.json");

export const rarityStore = {
	getAll: () => rarity.rarity,
	getPage: ({ limit, offset, traitCount, traits, sortBy = "id" }) => {
		offset = (sortBy !== "id") ? offset : offset + 1 ; 
		console.log(rarity.rarity);
		const dataStack = (sortBy !== "id") ? rarity.ranked : Object.keys(rarity.rarity);
		const data =
			traitCount && traitCount.length
				? dataStack.filter(
						(key) =>
							traitCount.indexOf(rarity.rarity[key].attributes.length) > -1
				  )
				: dataStack;
		const dataWithTraitFilter =
			traits && traits.length
				? data.filter((key) =>
					      { 
					console.log(rarity.rarity[parseInt(key) + 1]);
						traits.find(
							(traitValue) =>
								!!rarity.rarity[parseInt(key) + 1].attributes.find(
									(rarityAttribute) => rarityAttribute.value === traitValue
								)
						)}
				  )
				: data;
		// pagination
		const page = dataWithTraitFilter
			.slice(offset, offset + limit)
			.map((key, index) => {
				return rarity.rarity[key];
			});
		return {
			data: page,
			total: dataWithTraitFilter.length,
		};
	},
	getCount: () => rarity.traitCount,
	getTraits: () => rarity.traits,
	getRanks: () => rarity.ranked,
	getMeta: () => rarity.meta,
	getById: (id) => {
		return rarity.rarity.find((rar) => rar !== null && rar.id === Number(id));
	},
};
