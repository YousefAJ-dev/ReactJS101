// List.tsx
// A React component that renders a list of fruits and a filtered list of low-calorie fruits

function List(props) {

	// ──────────────────────────────────────
	// OPTION 1 (Commented Out): Basic string array mapping
	/*
	const fruits = ["orange", "pineapple", "apple", "banana", "kiwi"];
	const listItems = fruits.map(fruit => <li>{fruit}</li>);

	return (
		<ul>{listItems}</ul>
	);
	*/

	// ──────────────────────────────────────
	// OPTION 2: Array of fruit objects with calorie values

	// 1. Data source: array of fruit objects with id, name, and calories
	const itemsList = props.items;

	const category = props.category;

	// 2. Sort fruits alphabetically by name
	itemsList.sort((a, b) => a.name.localeCompare(b.name));

	// 3. Filter for low-calorie fruits (< 100 cal)
	const lowCalItems = itemsList.filter(items => items.calories < 100);

	// ──────────────────────────────────────
	// Mapping fruits to JSX list items

	// Full fruit list
	const listItems = itemsList.map(item => (
		<li key={item.id}>
			{item.name}: <b>{item.calories} cal</b>
		</li>
	));

	// Filtered low-calorie fruit list
	const lowCalList = lowCalItems.map(item => (
		<li key={item.id}>
				{item.name}: 
				<b>{item.calories} cal</b>
		</li>
	));

	// ──────────────────────────────────────
	// Render the component
	return (
		<div className="container">
			<div>
				<h2 className="list-category">{category}</h2>
			</div>
			<div className="subcategory-row">
				<div className="list-subcategory">
					<h3 className="list-subcategory--title">All {category}</h3>
					<ol className="list-items">{listItems}</ol>
				</div>

				<hr />

				<div className="list-subcategory">
					<h3 className="list-subcategory--title">Low Cal {category}</h3>
					<ul className="list-items">{lowCalList}</ul>
				</div>
			</div>
			
		</div>
	);
}

export default List;
