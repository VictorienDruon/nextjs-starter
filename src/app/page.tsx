import { Heading, Icon, Link } from "@/components/ui";
import { Center, HStack } from "@styled-system/jsx";

const HomePage = () => {
	return (
		<Center h="screen">
			<HStack>
				<Icon name="Globe" size="24" />
				<Link href="https://github.com/VictorienDruon/nextjs-starter">
					<Heading>Hello, World!</Heading>
				</Link>
			</HStack>
		</Center>
	);
};

export default HomePage;
