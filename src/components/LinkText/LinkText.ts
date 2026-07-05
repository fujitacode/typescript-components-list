import { cn } from "../../libs/utils";

export const LinkText = (
	content: string,
	options: {
		href?: string;
		blank?: boolean;
		align?: "center" | "right";
		className?: string;
	} = {},
) => {
	const { href = "#", blank = false, align, className = "" } = options;

	const classes = cn(
		"link-text",
		align && `link-text--align-${align}`,
		className,
	);

	return `
        <a href="${href}" class="${classes}" ${blank ? 'target="_blank" rel="noopener noreferrer"' : ""}>
            ${content}
            ${blank ? '<span class="link-text__icon"></span>' : ""}
        </a>
    `;
};
