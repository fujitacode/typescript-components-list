import { cn } from "../../libs/utils";

export const Stack = (
	content: string,
	{
		size = "md",
		className = "",
	}: {
		size?: "sm" | "md" | "lg";
		className?: string;
	} = {},
) => {
	const classes = cn("stack", `stack--${size}`, className);

	return `<div class="${classes}">${content}</div>`;
};
