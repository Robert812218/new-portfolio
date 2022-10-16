import Header from "../components/shared/Header";
import Link from "next/link";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Button } from "reactstrap";

export default function Home()  {
	return (
		<BaseLayout>
			<Container>
				<Button>DANGER</Button>
			</Container>
		</BaseLayout>
	);
}
