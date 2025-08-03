
function ProfilePicture() {

	const imgUrl = 'https://i.imgur.com/4FeMLGy.jpeg';

	const handleClick = (e) => console.log("Ouch!");

	return (<img onClick={(e) => handleClick(e)} src={imgUrl} height="450px"></img>);

}

export default ProfilePicture