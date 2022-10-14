import Header from "../shared/Header";

export default function BaseLayout(props) {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
}

