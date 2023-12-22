import { ark } from "@ark-ui/react";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";
import { ColorToken, SizeToken } from "@styled-system/tokens";
import { icons } from "lucide-react";
import { icon } from "./recipe";

export type IconProps = HTMLStyledProps<"svg"> & {
	name: keyof typeof icons;
	size: SizeToken;
	color?: ColorToken;
};

const StyledIcon = styled(ark.svg, icon);

export const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = icons[name];

	return (
		<StyledIcon asChild {...props}>
			<LucideIcon />
		</StyledIcon>
	);
};
