import { cn } from "../../libs/utils";

export const Heading = (
	content: string,
	{
		size = "2",
		align,
		className = "",
	}: {
		size?: "1" | "2" | "3" | "4" | "5" | "6";
		align?: "center" | "right";
		className?: string;
	} = {},
) => {
	const classes = cn(
		"heading",
		`heading--size-${size}`,
		align && `heading--align-${align}`,
		className,
	);

	return `<h${size} class="${classes}">${content}</h${size}>`;
};

// 呼び出し：Heading("タイトル", { size: "1", align: "center" })
