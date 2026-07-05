import { cn } from "../../libs/utils";

export const Text = (
	content: string,
	options: {
		align?: "center" | "right";
		variant?: "lead" | "small" | "muted";
		modifiers?: ("bold" | "italic" | "underline" | "strike" | "mosaic")[];
		className?: string;
	} = {},
) => {
	const { align, variant, modifiers = [], className = "" } = options;

	const classes = cn(
		"text",
		align && `text--align-${align}`,
		variant && `text--variant-${variant}`,
		...modifiers.map((m) => `is-${m}`),
		className,
	);

	return `<p class="${classes}">${content}</p>`;
};
