export const Heading = (
    content: string,
    options: {
        size?: "1" | "2" | "3" | "4" | "5" | "6";
        align?: "center" | "right";
        className?: string;
    } = {},
) => {
    const { size = "2", align, className = "" } = options;

    return (`
		<h${size} class="heading heading--size-${size} ${align ? ` heading--align-${align}` : ""}${className ? ` ${className}` : ""}">
			${content}
		</h${size}>
	`);
};